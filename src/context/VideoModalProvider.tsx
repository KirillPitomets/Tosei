import React, { FC, PropsWithChildren, useContext, useState } from 'react'

type VideoModalContextType = {
	isVisible: boolean
	setIsVisible: React.Dispatch<React.SetStateAction<boolean>>
	videoURL: string
	setVideoURL: React.Dispatch<React.SetStateAction<string>>
}

const VideoModalContext = React.createContext<VideoModalContextType>(null!)

const VideoModalProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const [isVisible, setIsVisible] = useState(false)
	const [videoURL, setVideoURL] = useState('')

	return (
		<VideoModalContext.Provider
			value={{ setIsVisible, isVisible, videoURL, setVideoURL }}
		>
			{children}
		</VideoModalContext.Provider>
	)
}

export default VideoModalProvider

export const useVideoModal = () => useContext(VideoModalContext)
