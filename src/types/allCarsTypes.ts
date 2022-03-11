import { string } from 'yup'
import variantStatusCar from '../enums/variantStatusCar'

export type PhotosCarType = {
	photo: string
	des: string
}

export type carDataType = {
	engineCapacity: number
	engineType: string
	yearProduction: number
	mileage: number
	machineDrive: string
	transmission: string
	priceInCity: string
	price: number
	status: variantStatusCar
	manufacturer: string
	bodyType: string
	color: string
	steeringWheel: string
	typeOfDrive: string
	power: number
	auction: string
	grade: number
	dateAuction: string
	location: string

	additionalInformation: string[]
}

export type allCarsType = {
	id: string
	name: string

	data: carDataType

	poster: string
	photos: PhotosCarType[]
}
