import variantStatusCar from '../enums/variantStatusCar'
import { IN_STOCK, UNDER_ORDER } from './consts'

export const translateCarStatusIntoRus = (status: variantStatusCar) => {
	switch (status) {
		case variantStatusCar.inStock:
			return IN_STOCK
		case variantStatusCar.underOrder:
			return UNDER_ORDER
	}
}
