import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'
import { apiSlice } from './../api/apiSlice'

const initialState = {
  user: undefined,
  role: '',
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      state.user = action.payload
      state.role = action.payload?.type || ''
    },
    userUpdate: (state, action) => {
      state.user = action.payload
      state.role = action.payload?.type || ''
    },
    userLoggedOut: (state) => {
      localStorage.removeItem('auth_token')
      state.user = undefined
      state.role = ''
      toast.success('Logout Success!')
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      apiSlice.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        localStorage.setItem('auth_token', payload?.data?.token)

        state.user = payload.data
        state.role = payload.data?.role
        toast.success('Login Success!')
      }
    )

    builder.addMatcher(
      apiSlice.endpoints.loggedInInfo.matchFulfilled,
      (state, { payload }) => {
        localStorage.setItem('auth_token', payload?.data?.token)

        state.user = payload.data
        state.role = payload.data?.role
      }
    )

    builder.addMatcher(
      apiSlice.endpoints.login.matchRejected,
      (_state, { payload }) => {
        toast.error(payload.data?.message || 'Something Went Wrong')
      }
    )
  },
})

export const { userLoggedIn, userLoggedOut, userUpdate } = authSlice.actions
export default authSlice.reducer
