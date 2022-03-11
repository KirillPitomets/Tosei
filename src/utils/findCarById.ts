import { allCars } from "../api/allCars/allCars";


export function findCarById (id: string | number) {

	return allCars.find(car => car.id === id)

}