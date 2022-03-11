import React from 'react';
// ======= Consts ======
import {REVIEWS_ROUTE} from '../../utils/consts'
// ======= Data ======
import reviewsData from './reviewsData';
// ======= Styles ======
import cl from './Reviews.module.scss'
import cn from 'classnames';
// ======= Components ======
import Title, { titlePositionVariants } from '../UI/Title/Title';
import VideoReview from '../VideoReview/VideoReview';
import BigLink from '../UI/BigLink/BigLink';



const Reviews = () => {
	return (
		<section className={cl.section}>
			<Title posTitle={titlePositionVariants.center} > Отзывы </Title>

			<div className={cn(cl.wrapper, cl.wrapper_marg)}>
				{
					reviewsData.map(review => (
						<VideoReview key={review.carName + review.name} 
							name={review.name}
							carName={review.carName}
							stars={review.stars}
							videoURL={review.video}
							photo={review.img}
						/>
					))
				}
			</div>

			<BigLink title='Еще отзывы' path={REVIEWS_ROUTE} />


		</section>
	);
};

export default Reviews;