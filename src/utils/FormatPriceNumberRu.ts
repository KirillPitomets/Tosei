export const formatPriceNumberRu = (num: number): string => {
	return num.toLocaleString('ru-RU', {
		style: 'currency',
		currency: 'RUB',
		maximumSignificantDigits: 3
	})
}
