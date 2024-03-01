import { useSearchParams } from 'react-router-dom'

export const useUploadEntitiesType = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const type = searchParams.get('type')

  const setType = (type) => {
    setSearchParams((prev) => {
      prev.set('type', type)
      return prev
    })
  }

  return { type, setType }
}
