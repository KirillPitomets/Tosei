export function translateUrlLocationToText(location: string): string {
	switch (location) {
		case 'catalog':
			return 'Каталог техники'
		case 'contacts':
			return 'Контакты'
		default:
			return location
	}
}