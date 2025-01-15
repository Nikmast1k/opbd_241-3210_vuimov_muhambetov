import { useState } from 'react'
import { AxiosError, AxiosResponse } from 'axios'

export const useAPI = <T>(
	request: (data: any) => Promise<any>,
	functions?: {
		onSuccess?: (response: AxiosResponse<{ data: T }>) => void
		onError?: (error: AxiosError) => void
	}
): [boolean, T | undefined, <K>(data?: K) => void] => {
	const [isLoading, setIsLoading] = useState(false)
	const [data, setData] = useState<T>()

	const requestWrapper = <K>(data?: K) => {
		setIsLoading(true)
		request(data)
			.then(response => {
				if (response) {
					functions?.onSuccess && functions.onSuccess(response)
					setData(response.data?.results || true)
				}
			})
			.catch(error => {
				functions?.onError && functions.onError(error)
			})
			.finally(() => setIsLoading(false))
	}

	return [isLoading, data, requestWrapper]
}
