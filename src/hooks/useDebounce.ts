import { useRef, useState, useCallback } from 'react'

interface IDebounceArgs<A = unknown, R = unknown> {
	callback: (args: A) => R
	delay: number
}

export default function useDebounce<A, R>({
	callback,
	delay,
}: IDebounceArgs<A, R>) {
	const timer = useRef<ReturnType<typeof setTimeout>>()
	const [isLoading, setIsLoading] = useState<boolean>(false)

	const debouncedCallback = useCallback(
		(args: A) => {
			setIsLoading(true)

			if (timer.current) {
				clearTimeout(timer.current)
			}

			timer.current = setTimeout(() => {
				callback(args)

				setIsLoading(false)
			}, delay)
		},
		[delay, callback]
	)

	return { debouncedCallback, isLoading }
}
