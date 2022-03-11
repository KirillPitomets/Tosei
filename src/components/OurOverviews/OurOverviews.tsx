import React from 'react';
// ======= Data ======
import cardInfo from './cardInfo'
// ======= Styles ======
import cl from './OurOverviews.module.scss'
import cn from 'classnames'
// ======= Components ======
import Title from '../UI/Title/Title';
import YTVideoCard from '../YTVideoCard/YTVideoCard';
import BigLink from '../UI/BigLink/BigLink';


const OurOverviews = () => {
	return (
		<section className={cl.section}>
			<Title>Наши обзоры</Title>

			<div className={cn(cl.wrapper, cl.wrapper_marg)}>

				{cardInfo.map(card => (
					<YTVideoCard
						key={card.title}
						title={card.title}
						photo={`${window.location.origin}/img/ytVideoPoster/${card.photo}`}
						views={card.views}
						videoTimeLength={card.videoTimeLength}
						dateOfDownload={card.dateOfDownload}
						videoURL={card.videoURL}
					/>
				))}
			</div>

			<BigLink routeLink={false}
				path='https://www.youtube.com/'
				title='Смотреть все обзоры'
				target='_blank'
				rel='noreferrer'
			/>
		</section>
	);
};

export default OurOverviews;