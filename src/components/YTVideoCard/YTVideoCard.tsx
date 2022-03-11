import React, { FC } from 'react';
// ======= Context ======
import { useVideoModal } from '../../context/VideoModalProvider';
// ======= Styles ======
import cl from './YTVideoCard.module.scss'
import cn from 'classnames'
// ======= Components ======

interface ITYVideoCard {
	photo: string,
	title: string,
	views: number,
	dateOfDownload: string,
	videoTimeLength: { hours: number, minute: number, seconds: number },
	videoURL: string
}

const YTVideoCard: FC<ITYVideoCard> = ({ photo, title, views, dateOfDownload, videoTimeLength, videoURL }) => {

	const videoModalContext = useVideoModal()

	return (
		<div className={cn(cl.card, cl.card_marg)}>

			<div className={cl.poster} onClick={() => {
				videoModalContext.setIsVisible(true)
				videoModalContext.setVideoURL(videoURL)
			}}>

				<img className={cl.poster__img}
					src={photo}
					alt={title}
				/>

				<div className={cl.time}>

					{videoTimeLength.hours ?
						<span className={cl.time__num}>
							{videoTimeLength.hours}
						</span>
						:
						null
					}
					<span className={cl.time__num}> {videoTimeLength.minute} </span>
					<span className={cl.time__num}> {videoTimeLength.seconds} </span>

				</div>

			</div>

			<h4 className={cl.title} onClick={() => {
				videoModalContext.setIsVisible(true)
				videoModalContext.setVideoURL(videoURL)
			}}>
				{title}
			</h4>

			<ul className={cl.list}>
				<li className={cl.list__item}>
					{views} {views === 1 ? 'просмотр' : views === 0 ? 'просмотров' : 'просмотра'}
				</li>
				<li className={cl.list__item}>
					3 недели назад
				</li>
			</ul>


		</div>
	);
};

export default YTVideoCard;