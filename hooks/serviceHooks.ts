import useSWR from "swr"
import fetcher from '../lib/fetcher'

export const useService = (id: number) => {
  const {data, error} = useSWR(`/api/services/${id}`, fetcher, {
    revalidateOnFocus: false
  })

  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  }
}

export const useServices = () => {
  const {data, error} = useSWR(`/api/services`, fetcher, {
    revalidateOnFocus: false
  })

  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  }
}

