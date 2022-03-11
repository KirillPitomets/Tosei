import React, { FC, useEffect, useState } from 'react';
// ======= Styles ======
import cl from './CarPageFeature.module.scss'
// ======= Context ======
import { useCarData } from '../../context/CarPageDataProvider';
// ======= Types ======
import { carDataType } from '../../types/allCarsTypes';
// ======= Components ======
import ErrorText from '../UI/ErrorText/ErrorText';
import { translateCarStatusIntoRus } from '../../utils/translateCarStatusIntoRus';
import BounceLoading from '../UI/BounceLoading/BounceLoading';

type CarDataListItemType = {
	name: string
	value: string | number
}

const CarPageFeature: FC = () => {

	const { data } = useCarData()

	const [carData, setCarData] = useState<CarDataListItemType[]>([])

	// Functions ======

	const generateListItems = (data: carDataType): CarDataListItemType[] => {
		return [
			{ name: 'Производитель', value: data.manufacturer },
			{ name: 'Год', value: data.yearProduction },
			{ name: 'Тип кузова', value: data.bodyType },
			{ name: 'Цвет', value: data.color },
			{ name: 'Руль', value: data.steeringWheel },
			{ name: 'Пробег', value: `${data.mileage.toLocaleString('ru-RU')} км`},
			{ name: 'Тип привода', value: data.typeOfDrive },
			{ name: 'Двигатель', value: data.engineType },
			{ name: 'Мощность', value: `${data.power} л.с.` },
			{ name: 'КПП', value: data.transmission },
			{ name: 'Аукцион', value: data.auction },
			{ name: 'Оценка', value: data.grade },
			{ name: 'Дата аукциона', value: data.dateAuction },
			{ name: 'Местонахождения', value: data.location },
			{ name: 'Статус', value: translateCarStatusIntoRus(data.status)! },
		]
	}

	useEffect(() => {
		if (data) {
			setCarData(generateListItems(data))
		}
	}, [data])


	return (
		<ul className={cl.list}>
			{
				carData
					?
					carData.map((listItem, indx) => (
						<li key={`CarPageFeature-${indx}`} className={cl.list__item}>
							<p className={cl.list__name}>
								{listItem.name} :
							</p>
							<p className={cl.list__value}>
								{
									listItem.value
								}
							</p>
						</li>
					))
					:
					<BounceLoading/>
			}
		</ul>
	);
};

export default CarPageFeature;