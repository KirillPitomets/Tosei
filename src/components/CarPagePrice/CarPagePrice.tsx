import React, { FC } from 'react';
// ======= utils ======
import { checkAndPrepositionChanges } from '../../utils/checkAndPrepositionChanges';
import { formatPriceNumberRu } from '../../utils/FormatPriceNumberRu';
// ======= Styles ======
import cl from './CarPagePrice.module.scss'

type Props = {
	city: string
	price: number
}

const CarPagePrice: FC<Props> = ({ city, price }) => {

	return (
		<div className={cl.price}>

			<p className={cl.price__text}>
				Стоимость {checkAndPrepositionChanges(city)} {city}
			</p>
			<p className={cl.price__number}> {formatPriceNumberRu(price)} </p>
			<span className={cl.price__span}>Цена указана с учетом НДС</span>
		</div>
	);
};

export default CarPagePrice;