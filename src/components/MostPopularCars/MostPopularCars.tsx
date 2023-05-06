import React, { useEffect, useState } from 'react'
// ======= Consts ======
import { CATALOG_ROUTE } from '../../utils/consts'
// ======= Type ======
// assets
import { allCarsType } from '../../types/allCarsTypes'
import { allCars } from '../../api/allCars/allCars'
// ======= Styles ======
import cl from './MostPopularCars.module.scss'
// ======= Hooks ======
import useSortCars from '../../hooks/useSortCars'
import useDebounce from '../../hooks/useDebounce'
// ======= Components ======
import Title from '../UI/Title/Title'
import CardOfCar from '../CardOfCar/CardOfCar'
import BigLink from '../UI/BigLink/BigLink'
import Loading from '../UI/Loading/Loading'
import RadioBtnsForSortCars from '../UI/RadioBtnsForSortCars/RadioBtnsForSortCars'

const takeTheFirstThreeCars = (arr: any[]) => {
	return arr.slice(0, 3)
}

const MostPopularCars = () => {
	// Hooks
	const [typeSortCars, setTypeSortCars] = useState('')
	// useState hooks
	const [cars, setCars] = useState<allCarsType[]>(
		takeTheFirstThreeCars(allCars)
	)
	// Custom hooks
	const sortCars = useSortCars()

	const debouncedHook = useDebounce({
		callback: (sortType: string) => {
			setCars(takeTheFirstThreeCars(sortCars(allCars, sortType)))
		},
		delay: 500,
	})

	// useEffect
	useEffect(() => {
		debouncedHook.debouncedCallback(typeSortCars)
	}, [typeSortCars])

	return (
		<section className={cl.section}>
			<Title>Популярные автомобили</Title>

			<RadioBtnsForSortCars setTypeSortCars={setTypeSortCars} />

			<div className={cl.wrap}>
				{debouncedHook.isLoading ? (
					<Loading />
				) : (
					cars.map(car => (
						<CardOfCar
							key={car.id}
							carId={car.id}
							name={car.name}
							photo={car.poster}
							infoForCar={car.data}
						/>
					))
				)}
			</div>

			<BigLink title='Показать еще' path={CATALOG_ROUTE} />
		</section>
	)
}

export default MostPopularCars
