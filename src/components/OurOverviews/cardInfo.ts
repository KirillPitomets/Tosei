type ITYVideoCard = {
	photo: string,
	title: string,
	views: number,
	dateOfDownload: string,
	videoURL: string,
	videoTimeLength: { hours: number, minute: number, seconds: number }
}

const infoCard: ITYVideoCard[] = [
	{
		title: 'Космический Shuttle | HONDA FIT SHUTTLE 2013',
		views: 1,
		dateOfDownload: '07.01.2022',
		videoURL: '',
		videoTimeLength: { hours: 0, minute: 5, seconds: 22 },
		photo: '01.jpg',
	},
	{
		title: 'Компактный минивен I Toyota Siena 2017 г.',
		views: 0,
		dateOfDownload: '07.01.2022',
		videoURL: '',
		videoTimeLength: { hours: 0, minute: 5, seconds: 22 },
		photo: '01.jpg',
	},
	{
		title: 'Спецтехника по-крупному | KATO KB1500R',
		views: 391,
		dateOfDownload: '07.01.2022',
		videoURL: '',
		videoTimeLength: { hours: 0, minute: 5, seconds: 22 },
		photo: '01.jpg',
	},
]

export default infoCard;