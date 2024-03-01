import { useSearchParams } from 'react-router-dom'

export const useAuthType = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const type = searchParams.get('type')
  const toggleType = () => {
    setSearchParams((prev) => {
      prev.set('type', prev.get('type') === 'sso' ? 'credentials' : 'sso')
      return prev
    })
  }

  return { type, toggleType }
}
