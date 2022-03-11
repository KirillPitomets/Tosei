import React, { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
// ======= Data ======
import navLinks, { typesLinks } from './data/navlinks'
// ======= Styles ======
import cl from './Nav.module.scss'
import cn from 'classnames'
// ======= Components ======
import {
	Dropdown,
	DropdownItemList,
	DropdownList,
} from '../UI/Dropdown/Dropdown'

const Nav = () => {

	const location = useLocation()

	// Function
	const isActiveLink = (isActive: boolean, activeClassName: string, className: string) => {
		return !isActive ? className : cn(className, activeClassName)
	}

	const isThisTheCurrentPage = (currentPathName: string, pathForCheck: string): boolean => {

		const gotPathNames: string[] = currentPathName.split('/')
		const pathForCheckWithoutSlashSymbol: string[] = pathForCheck.split('/')

		const has = gotPathNames.find(path => path === pathForCheckWithoutSlashSymbol[1])

		return has ? true : false
	}

	return (
		<nav className={cl.nav}>
			<ul className={cl.nav__list}>

				{navLinks.map(item => (
					<li key={item.name}
						className={isThisTheCurrentPage(location.pathname, item.path)
							? cn(cl.nav__item, cl.nav__item_active)
							: cl.nav__item
						}
					>
						{item.type === typesLinks.link
							?
							<Link className={cl.link}
								to={item.path}
							>
								{item.name}
							</Link>
							:
							<Dropdown title={item.name} titleClassName={cl.link} dropdownClassName={cl.nav__dropdown}  >
								{/* List */}
								<DropdownList>
									{item.list?.map(itemList => (
										// Item
										<DropdownItemList key={itemList.id}>
											<NavLink to={itemList.path}
												className={({ isActive }) => (isActiveLink(isActive, cl['sub-link_active'], cl['sub-link']))}
											>
												{itemList.name}
											</NavLink>
										</DropdownItemList>

									))}
								</DropdownList>
							</Dropdown>

						}
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Nav
