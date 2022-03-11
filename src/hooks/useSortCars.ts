import { allCarsType } from '../types/allCarsTypes'
import variantStatusCar from '../enums/variantStatusCar'

export default function useSortCars() {
	
	const sortCars = (cars: allCarsType[], sortType: string | variantStatusCar): allCarsType[] => {
		
		if (sortType === variantStatusCar.any) {
			return cars
		}

		const sortedCars: allCarsType[] = []

		cars.forEach(car => {
			if (car.data.status === sortType) {
				sortedCars.push(car)
			}
		})

		return sortedCars
	}

	return sortCars
}
