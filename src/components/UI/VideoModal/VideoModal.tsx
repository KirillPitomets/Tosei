import React, { FC } from 'react';
// ======= CSSTransition ======
import { CSSTransition } from 'react-transition-group';
// ======= Context ======
import { useVideoModal } from '../../../context/VideoModalProvider';
// ======= Styles ======
import cl from './VideoModal.module.scss'
// ======= Components ======
import NotFound from '../../NotFount/NotFound';
import BounceLoading from '../BounceLoading/BounceLoading';

const VideoModal: FC = () => {

	const videoModalContext = useVideoModal()

	return (
		<CSSTransition in={videoModalContext.isVisible}
			timeout={200}
			classNames='video-modal'
			unmountOnExit
		>
			<div className={cl.modal}
				onClick={() => videoModalContext.setIsVisible(false)}
			>
				<div
					className={cl.wrapper}
					onClick={event => event.stopPropagation()}
				>

					{videoModalContext.videoURL.length > 1 ?
						<>
							<BounceLoading title='Загрузка видео' />
							<div className={cl.inner}>
								<iframe className={cl.video} src={videoModalContext.videoURL}
									title="YouTube video player"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								/>
							</div>
						</>
						:
						<NotFound title='Видео' />
					}

				</div>
			</div>
		</CSSTransition>

	);
};

export default VideoModal;
