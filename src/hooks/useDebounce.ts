import { useRef, useState, useCallback } from 'react'

export default function useDebounce(
	callback: (...args: any[]) => void,
	delay: number
) {
	const timer = useRef<ReturnType<typeof setTimeout>>()
	const [isLoading, setIsLoading] = useState<boolean>(false)

	const debouncedCallback = useCallback( (...args) => {

			setIsLoading(true)
			
			if (timer.current) {
				clearTimeout(timer.current)
			}

			timer.current = setTimeout(() => {
				callback(...args)

				setIsLoading(false)
			}, delay)
		},
		[delay, callback]
	)

	return { debouncedCallback, isLoading }
}
