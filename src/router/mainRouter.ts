import { ABOUT_US_ROUTE, AUCTION_ROUTE, SERVICES_ROUTE } from './../utils/consts';
// ======= Route ======
import {
	HOME_ROUTE,
	ERROR_ROUTE,
	CONTACTS_ROUTE,
	CATALOG_ROUTE,
	REVIEWS_ROUTE,
	INFORMATION_ROUTE
} from '../utils/consts'
// ======= Pages ======
import Home from '../pages/Home'
import Contacts from '../pages/Contacts'
import Catalog from '../pages/Catalog/Catalog'
import CarPage from '../pages/CarPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import ReviewsPage from '../pages/Reviews'
import InformationPage from '../pages/Information'
import Auction from '../pages/Auction';
import About from '../pages/Catalog/About';
import Service from '../pages/Service';

export const routes = [
	{ path: HOME_ROUTE, component: Home },
	{ path: CONTACTS_ROUTE, component: Contacts },
	{ path: CATALOG_ROUTE, component: Catalog },
	{ path: REVIEWS_ROUTE, component: ReviewsPage },
	{ path: `${CATALOG_ROUTE}/:id`, component: CarPage },
	{ path: AUCTION_ROUTE, component: Auction},
	{ path: ABOUT_US_ROUTE, component: About },
	
	// { path: SERVICES_ROUTE, component: Service},


	{ path: `${INFORMATION_ROUTE}/:id`, component: InformationPage },

	{ path: ERROR_ROUTE, component: ErrorPage }
]
