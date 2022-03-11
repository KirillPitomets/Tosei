import React, { useEffect, useState } from 'react';
// ======= Context ======
// ======= Router ======
import { useParams } from 'react-router-dom';
// ======= Types ======
import { allCarsType } from '../types/allCarsTypes';
// ======= Utils ======
import { findCarById } from '../utils/findCarById';
// ======= Components ======
import CarPageContent from '../components/CarPageContent/CarPageContent';
import ErrorText from '../components/UI/ErrorText/ErrorText';
import MostPopularCars from '../components/MostPopularCars/MostPopularCars';
import CarPageDataProvider from '../context/CarPageDataProvider';


const CarPage = () => {

	const { id } = useParams()

	const [car, setCar] = useState<allCarsType | undefined>(findCarById(id!))

	useEffect(() => {
		if (id) {
			setCar(findCarById(id))
		} else {
			setCar(undefined)
		}

		window.scrollTo(0, 0)
	}, [id])

	return (
		<div className='container'>
			{
				car
					?
					<>
						<CarPageDataProvider>
							<CarPageContent car={car} carId={id!} />
						</CarPageDataProvider>

						<MostPopularCars />
					</>
					:
					<ErrorText remFontSize={2.5}> Машина с таким ID не найдена :( </ErrorText>
			}
		</div>
	);
};

export default CarPage;