type typeReviewsData = {
	name: string,
	carName: string,
	stars: number,
	video: string,
	img: string
}

const reviewsData: typeReviewsData[] = [
	{
		name: 'Генадий Сергеевич',
		carName: 'Toyota Allion',
		stars: 4,
		video: 'https://www.youtube.com/embed/UN2Id5hCwCI',
		img: '01.jpg'
	},
	{
		name: 'Николай Евгеньевич',
		carName: 'BMW - X5 2005',
		stars: 5,
		video: 'https://www.youtube.com/embed/YwexIPNkVxA',
		img: '02.jpg'
	},
	{
		name: 'Ольга Архипова',
		carName: 'Toyota Allion',
		stars: 1,
		video: 'https://www.youtube.com/embed/YwexIPNkVxA',
		img: '03.jpg'
	},
	{
		name: 'Роман Юрьевич',
		carName: 'Honda Fit',
		stars: 3,
		video: 'https://www.youtube.com/embed/YwexIPNkVxA',
		img: '04.jpg'
	},
]

export default reviewsData