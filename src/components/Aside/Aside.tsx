import React from 'react'
// ======= Provider ======
import { useNavBurger } from '../../context/NavigateBurgerProvider'
// ======= Styles ======
import cl from './Aside.module.scss'
import cn from 'classnames'
// ======= Components ======
import Logo from '../UI/Logo/Logo'
import Nav from '../Nav/Nav'
import Socials from '../Socials/Socials'
import PhoneNumber from '../UI/PhoneNumber/PhoneNumber'

const Aside = () => {
	const navBurger = useNavBurger() // isVisible, handler

	return (
		<aside className={cn(cl.aside, {[cl.aside_active]: navBurger.isVisible})}>
			<div className={cl.aside__wrap}>
				<div className={cl.logo}>
					<Logo />
				</div>

				<Nav />

				<div className={cl.number}>
					<PhoneNumber />
				</div>

				<Socials className={cl.socials} />
			</div>
		</aside>
	)
}

export default Aside
