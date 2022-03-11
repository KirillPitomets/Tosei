import React, { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
// ======= Utils ======
import { translateUrlLocationToText } from '../../utils/translateRouteToText';
// ======= Consts ======
import { HOME_ROUTE } from '../../utils/consts';
// ======= Styles ======
import cl from './NavCrumb.module.scss'

type additionalLocationsType = {
	title: string
	path: string
}

type NavCrumbType = {
	removeParams?: string[]
	additionalLocations?: additionalLocationsType[]
}

const NavCrumb: FC<NavCrumbType> = ({ removeParams, additionalLocations }) => {

	const location = useLocation()

	const createNavCrumb = (location: string): string[] => {
		const arr: string[] = location.split('/')
		return arr
	}

	const deleteParamsFromNavCrumb = (locationName: string) => {
		if (removeParams) {
			return removeParams.find(param => param === locationName) ? false : true
		} else {
			return true
		}
	}

	return (
		<ul className={cl.list}>
			<li className={cl.list__item}>
				<Link to={HOME_ROUTE} className={cl.list__link}>Главная</Link>
			</li>
			{
				createNavCrumb(location.pathname).map(locationName => (
					locationName !== '' &&
					deleteParamsFromNavCrumb(locationName) && (
						<li key={location.pathname} className={cl.list__item}>
							<Link to={`/${locationName}`} className={cl.list__link}>
								{
									translateUrlLocationToText(locationName)
								}
							</Link>
						</li>
					)
				))
			}
			{
				additionalLocations && additionalLocations.map(location => (
					<li key={location.title} className={cl.list__item}>
						<Link to={`${location.path}`} className={cl.list__link}>{location.title}</Link>
					</li>
				))
			}
		</ul>
	);
};

export default NavCrumb;