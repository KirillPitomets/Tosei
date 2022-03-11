import React, { FC } from 'react';
// ======= Context ======
import { useVideoModal } from '../../context/VideoModalProvider';
// ======= Images ======
import yt from '../../assets/img/yt.png'
// ======= Styles ======
import cl from './VideoReview.module.scss'
import cn from 'classnames'
// ======= Components ======
import SvgIcon from '../UI/SvgIcon/SvgIcon';

interface IVideoReview {
	name: string
	carName: string
	stars: number
	videoURL: string
	photo: string
}

const VideoReview: FC<IVideoReview> = ({ name, carName, stars, videoURL, photo }) => {

	// ==== Hooks
	const videoModalContext = useVideoModal()

	const createArrayOfStars = (countStars: number): number[] => {
		const arr = []
		for (let indx = 0; indx < countStars; indx++) {
			if (arr.length < 5) {
				arr.push(indx)
			} else {
				return arr
			}
		}
		return arr
	}

	const createArrayOfInactiveStars = (activeStars: number): number[] => {
		const arr = []
		const disActiveStars = 5 - activeStars

		for (let indx = 0; indx < disActiveStars; indx++) {
			arr.push(indx)
		}

		return arr
	}

	const activeStars = createArrayOfStars(stars)
	const inactiveStars = activeStars.length < 5 ? createArrayOfInactiveStars(activeStars.length) : []

	return (
		<div className={cn(cl.review, cl.review_marg)}>

			<div className={cl.poster}>
				<div className={cl.poster__inner} >
					<button className={cl.poster__btn} 
					onClick={() => {
						videoModalContext.setIsVisible(true)
						videoModalContext.setVideoURL(videoURL)
					}} >
						<img src={yt} alt="YouTube" />
					</button>
				</div>
				<img className={cl.poster__img}
					src={`${window.location.origin}/img/review/${photo}`}
					alt={name}
				/>
			</div>

			<div className={cl.content}>
				<div className={cl.stars}>
					{activeStars.map((star) => (
						<div className={cl.star} key={`activeStar-${star}`}>
							<SvgIcon iconIdName='star' svgClassName={cl.star__svg} viewBox='0 0 16 16' />
						</div>
					))}
					{inactiveStars.map((star) => (
						<div className={cl.star} key={`inactiveStar${star}`}>
							<SvgIcon iconIdName='star' svgClassName={cn(cl.star__svg, cl.star__svg_inactive)} viewBox='0 0 16 16' />
						</div>
					))}

				</div>

				<h4 className={cl.name}> {name} </h4>
				<p className={cl['car-name']}>{carName}</p>

			</div>
		</div>
	);
};

export default VideoReview;