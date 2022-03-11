import variantStatusCar from '../../../../enums/variantStatusCar'

type radioBtnsTypeSort = {
	sortTitle: string
	sortName: variantStatusCar
}

const radioBtnsTypeSort: radioBtnsTypeSort[] = [
	{
		sortTitle: 'Любые',
		sortName: variantStatusCar.any,
	},
	{
		sortTitle: 'В наличии',
		sortName: variantStatusCar.inStock,
	},
	{
		sortTitle: 'Под заказ',
		sortName: variantStatusCar.underOrder,
	},
]

export default radioBtnsTypeSort
