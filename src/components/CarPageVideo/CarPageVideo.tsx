import React from 'react';
// ======= Components ======
import YTVideoCard from '../YTVideoCard/YTVideoCard';
import VideoModal from '../UI/VideoModal/VideoModal';
import VideoModalProvider from '../../context/VideoModalProvider';

const CarPageVideo = () => {

	return (
		<VideoModalProvider>
			<VideoModal />
			<YTVideoCard
				title='Компактный минивен I Toyota Siena 2017 г.'
				photo={`${window.location.origin}/img/ytVideoPoster/01.jpg`}
				views={391}
				videoTimeLength={{
					hours: 0,
					minute: 11,
					seconds: 25,
				}}
				videoURL='https://www.youtube.com/embed/YwexIPNkVxA'
				dateOfDownload=''
			/>
		</VideoModalProvider>

	)
};

export default CarPageVideo;