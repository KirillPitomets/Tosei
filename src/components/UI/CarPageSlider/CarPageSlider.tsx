import React, { FC } from 'react';
// ======= Types ======
import { PhotosCarType } from '../../../types/allCarsTypes'
// ======= Styles ======
import cl from './CarPageSlider.module.scss'
// === Splide
import '@splidejs/splide/dist/css/splide.min.css';
// ======= Splide ======
import { Splide, SplideSlide } from '@splidejs/react-splide';

type CarPageSliderType = {
	photos: PhotosCarType[]
}

const CarPageSlider: FC<CarPageSliderType> = ({ photos }) => {

	const options = {
		type: 'slide',
		perPage: 2,
		fixedWidth : '370px',
		fixedHeight: '252px',
		gap: '.5rem',
		padding: {
			right: '25%'
		},
		pagination: false,
		arrows: false,
	}

	return (
		<Splide className={cl.slider_marg} options={options} >
			{
				photos.map(photo => (
					<SplideSlide key={`carPageSlider-photo-${photo.photo}`}>
						<div className={cl.card}>
							<img
								className={cl.card__img}
								src={`${window.location.origin}/img/carPageSlider/${photo.photo}`}
								alt={photo.des}
							/>
						</div>
					</SplideSlide>
				))
			}
		</Splide>
	);
};

export default CarPageSlider;