import React, { useState } from 'react'
// ======= Provider ======
import { useNavBurger } from '../../context/NavigateBurgerProvider'
// ======= Styles ======
import cl from './Header.module.scss'
// ======= Components ======
import HeaderContent from '../HeaderContent/HeaderContent'
import ToggleButton from '../UI/ToggleButton/ToggleButton'
import Logo from '../UI/Logo/Logo'

const Header = () => {

	const navBurger = useNavBurger() // isVisible, handler

	return (
		<header className={cl.header}>
			<div className='container'>

				<div className={cl.header__wrapper}>

					<div className={cl.header__content}>
						<HeaderContent />
					</div>

					{/* Mobile elements */}
					<div className={cl.header__logo}>
						<Logo />
					</div>

					<div className={cl['toggle-btn']}>
						<ToggleButton isActive={navBurger.isVisible} handler={navBurger.handler} />
					</div>
					{/* /.Mobile elements */}

				</div>
			</div>
		</header>
	)
}

export default Header
