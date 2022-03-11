import React, { FC } from 'react'
// ======= Types ======
import { carDataType } from '../../types/allCarsTypes'
// ======= Router ======
import { Link } from 'react-router-dom'
import { CATALOG_ROUTE } from '../../utils/consts'
// ======= Utils ======
import { checkAndPrepositionChanges } from '../../utils/checkAndPrepositionChanges'
import { formatPriceNumberRu } from '../../utils/FormatPriceNumberRu'
// ======= Styles ======
import cl from './CardOfCar.module.scss'
import cn from 'classnames'
// ======= Components ======
import CardOfCarRow from '../CardOfCarRow/CardOfCarRow'
import StatusCar from '../UI/StatusCar/StatusCar'

type Props = {
	carId: string
	name: string
	infoForCar: carDataType
	photo: string
}


const CardOfCar: FC<Props> = ({ carId, name, infoForCar, photo }) => {

	// Variables
	const linkUrl = `${CATALOG_ROUTE}/${carId}`

	// functions
	const formateNumber = (num: number, option?: {}): string => {
		return num.toLocaleString('ru-RU', option)
	}

	return (
		<div className={cn(cl.card, cl.card_pad)}>
			<Link to={linkUrl} className={cl.photo}>
				<img className={cl.photo__img} src={`${window.location.origin}/img/card/${photo}`} alt={name} />
			</Link>

			<div className={cn(cl.content, cl.content_marg)}>
				<h3 className={cl.title}>
					<Link to={linkUrl}> {name} </Link>
				</h3>

				<div className={cl.list}>

					<div className={cl.list__wrapper}>
						<dl className={cl.list__item}>

							<CardOfCarRow
								title='Объем двигателя'
								value={`${infoForCar.engineCapacity} л.с.`}
							/>

							<CardOfCarRow
								title='Год'
								value={`${infoForCar.yearProduction} г.`}
							/>

							<CardOfCarRow
								title='Пробег'
								value={`${formateNumber(infoForCar.mileage)} км`}
							/>

							<p className={cl.list__des}>Под полную пошлину</p>

						</dl>

						<dl className={cl.list__item}>
							<CardOfCarRow title='Привод' value={infoForCar.machineDrive} />
							<CardOfCarRow title='КПП' value={infoForCar.transmission} />
						</dl>
					</div>

					<ul className={cn(cl.list__item, cl['list__item_border-top'])}>

						<li className={cl.list__title}>
							Стоимость {checkAndPrepositionChanges(infoForCar.priceInCity)} {' '}
							{infoForCar.priceInCity}
						</li>

						<li className={cl.price}>
							{ formatPriceNumberRu(infoForCar.price) }
						</li>

						<li className={cl.status}>
							<StatusCar status={infoForCar.status} />
						</li>

					</ul>
				</div>
			</div>
		</div>
	)
}

export default CardOfCar
