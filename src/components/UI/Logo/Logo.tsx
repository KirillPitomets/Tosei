import React from 'react'
import {Link} from 'react-router-dom'
// ======= Consts ======
import { HOME_ROUTE } from '../../../utils/consts'
// ======= Styles ======
import cl from './Logo.module.scss'
// ======= Img ======
import logo from '../../../assets/img/logo.svg'
import classNames from 'classnames'


const Logo = () => {
	return (
		<Link to={HOME_ROUTE} className={cl.logo}>
			<img className={cl.logo__link} src={logo} alt='Tosei' />
			<p className={classNames(cl.text, cl.text_marg)}>
				tosei
			</p>
		</Link>
	)
}

export default Logo
