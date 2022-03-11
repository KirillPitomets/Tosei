import React, { FC, useEffect } from 'react';
// ======= Types ======
import { allCarsType } from '../../types/allCarsTypes';
// ======= styles ======
import cl from './CarPageContent.module.scss'
import cn from 'classnames';
// ======= Components ======
import Title from '../../components/UI/Title/Title';
import NavCrumb from '../NavCrumb/NavCrumb';
import CarPageSlider from '../UI/CarPageSlider/CarPageSlider';
import CarPageInfoMenu from '../CarPageInfoMenu/CarPageInfoMenu';
import Button, { ButtonVariants } from '../UI/Button/Button';
import CarPagePrice from '../CarPagePrice/CarPagePrice';

import { useCarData } from '../../context/CarPageDataProvider';
import StatusCar from '../UI/StatusCar/StatusCar';

type Props = {
	carId: string,
	car: allCarsType
}

const CarPageContent: FC<Props> = ({ carId, car }) => {

	const { handleCarData } = useCarData()

	useEffect(() => {
		handleCarData(car.data)
	}, [car])

	return (
		<>
			<div className={cl['header']}>
				
				<NavCrumb
					removeParams={[carId]}
					additionalLocations={[
						{ title: car.name, path: '' }
					]}
				/>
				<Title>
					{car.name}
					<StatusCar className={cl.status_marg} status={car.data.status} />
				</Title>
			</div>

			<CarPageSlider photos={car.photos} />

			<div className={cl.wrapper}>

				<CarPageInfoMenu className={cn(cl.wrapper__item, cl.wrapper__item_big)} />

				<div className={cn(cl.wrapper__item, cl.wrapper__price)}>

					<CarPagePrice price={car.data.price} city={car.data.priceInCity} />

					<div className={cn(cl.buttons, cl.buttons_marg)}>
						<Button title='Консультация бесплатно' classNameButton={cl.buttons__btn} />
						<Button title='Оставить заявку' classNameButton={cl.buttons__btn_small} styleVariant={ButtonVariants.outline} />
					</div>

				</div>
			</div>
		</>
	);
};

export default CarPageContent;