import {
	CATALOG_ROUTE,
	HOW_TO_READ_ROUTE,
	QUESTION_ROUTE,
	CONSTRUCTOR_ROUTE,
	REGISTRATION_ROUTE,
	DEFINE_DATE_ROUTE,
	TIMETABLE_ROUTE,
	ADDRESS_CONTACTS_ROUTE,
	REVIEWS_ROUTE,
	CONTACTS_ROUTE,
	INFORMATION_ROUTE,
	SERVICES_ROUTE,
	AUCTION_ROUTE,
	ABOUT_US_ROUTE,
} from '../../../utils/consts'

export enum typesLinks {
	'dropdown',
	'link',
}

type navLinksTypes = {
	name: string
	path: string
	type: typesLinks
	list?: listTypes[]
}

type listTypes = {
	id: string
	name: string
	path: string
}

const navLinks: navLinksTypes[] = [
	{
		name: 'Услуги',
		type: typesLinks.link,
		path: SERVICES_ROUTE,
	},
	{
		name: 'Каталог техники',
		type: typesLinks.link,
		path: CATALOG_ROUTE,
	},
	{
		name: 'Аукцион',
		type: typesLinks.link,
		path: AUCTION_ROUTE,
	},
	{
		name: 'Информация',
		type: typesLinks.dropdown,
		path: INFORMATION_ROUTE,
		list: [
			{
				id: 'question',
				name: 'Вопрос ответ',
				path: INFORMATION_ROUTE + QUESTION_ROUTE,
			},
			{
				id: 'howToRead',
				name: 'Как читать аукционный лист',
				path: INFORMATION_ROUTE + HOW_TO_READ_ROUTE,
			},
			{
				id: 'Constructors',
				name: 'Распилы, Карпилы, Конструкторы',
				path: INFORMATION_ROUTE + CONSTRUCTOR_ROUTE,
			},
			{
				id: 'registration',
				name: 'Оформление распилов/конструкторов',
				path: INFORMATION_ROUTE + REGISTRATION_ROUTE,
			},
			{
				id: 'defineDate',
				name: 'Определение даты выпуска',
				path: INFORMATION_ROUTE + DEFINE_DATE_ROUTE,
			},
			{
				id: 'timetable',
				name: 'Расписание судов',
				path: INFORMATION_ROUTE + TIMETABLE_ROUTE,
			},
			{
				id: 'addressAndContacts',
				name: 'Адреса и контакты CBX',
				path: INFORMATION_ROUTE + ADDRESS_CONTACTS_ROUTE,
			},
		],
	},
	{
		name: 'О нас',
		type: typesLinks.link,
		path: ABOUT_US_ROUTE,
	},
	{
		name: 'Отзывы',
		type: typesLinks.link,
		path: REVIEWS_ROUTE,
	},
	{
		name: 'Контакты',
		type: typesLinks.link,
		path: CONTACTS_ROUTE,
	},
]

export default navLinks
