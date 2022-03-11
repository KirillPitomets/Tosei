import React, { FC, useEffect, useRef, useState } from 'react';
// ======= Styles ======
import cl from './CarList.module.scss'
// ======= api ======
import { allCars } from '../../api/allCars/allCars';
// ======= Types ======
import { allCarsType } from '../../types/allCarsTypes'
// ======= Hooks ======
import useDebounce from '../../hooks/useDebounce';
import useSortCars from '../../hooks/useSortCars';
// ======= Components ======
import CardOfCar from '../CardOfCar/CardOfCar';
import Title from '../UI/Title/Title'
import RadioInputs from '../UI/RadioBtnsForSortCars/RadioBtnsForSortCars';
import Loading from '../UI/Loading/Loading';
import Pagination from '../UI/Pagination/Pagination';

const CarList: FC = () => {
	// useState
	const [typeSortCars, setTypeSortCars] = useState<string>('')
	const [cars, setCars] = useState<allCarsType[]>([])

	const limitCars: number = 8
	const [page, setPage] = useState<number>(1)
	// variables
	const [numberOfPages, setNumberOfPages] = useState<number>(Math.ceil(allCars.length / limitCars))

	// Custom hooks
	const sortCars = useSortCars()

	const debouncedHook = useDebounce((sortType: string) => {

		const sortedCars = sortCars(allCars, sortType)

		const trimmedArrayOfCars = trimArrayOfCars({
			page,
			limitCars,
			cars: sortedCars
		})

		setCars(trimmedArrayOfCars)
		setNumberOfPages(Math.ceil(sortedCars.length / limitCars))
	}, 500)


	type trimArrayOfCarsType = {
		page: number
		limitCars: number
		cars: allCarsType[]
	}

	const trimArrayOfCars = ({ page, limitCars, cars }: trimArrayOfCarsType) => {
		const startElement = page * limitCars - limitCars

		return cars.slice(startElement, startElement + limitCars)
	}

	// Effect
	useEffect(() => {
		debouncedHook.debouncedCallback(typeSortCars)
	}, [typeSortCars, page])


	return (
		<>
			<div className={cl['car-list']}>

				<Title>Популярные автомобили</Title>
				<RadioInputs setTypeSortCars={setTypeSortCars} />
				{
					debouncedHook.isLoading
						?
						<Loading />
						:
						cars.map(car => (
							<CardOfCar
								key={`CarList-${car.id}`}
								carId={car.id}
								name={car.name}
								photo={car.poster}
								infoForCar={car.data}
							/>
						))
				}
			</div>
			<Pagination
				currentPage={page}
				numberOfPages={numberOfPages}
				setPage={setPage}
			/>
		</>
	);
};

export default CarList;