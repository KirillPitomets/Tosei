import React, { FC, useEffect, useState } from 'react'
// ======= Enums ======
import { EnumCarNavbar } from '../../enums/EnumCarNavbar'
// ======= Styles ======
import cl from './CarPageInfoMenu.module.scss'
// ======= Components ======
import CarPageNavbar from '../CarPageNavbar/CarPageNavbar'
import CarPageInfo from '../CarPageInfo/CarPageInfo'
import CarPageNavbarSlider from '../CarPageNavbarSlider/CarPageNavbarSlider'

const carNavBar = [
	{
		id: EnumCarNavbar.feature,
		title: 'Характеристики'
	},
	{
		id: EnumCarNavbar.additionalInformation,
		title: 'Дополнительная информация'
	},
	{
		id: EnumCarNavbar.videoReview,
		title: 'Видео обзор'
	}
]

const CarPageInfoMenu: FC<React.HTMLAttributes<HTMLDivElement>> = ({ ...props }) => {
	const [activatedMenuElement, setActivatedMenuElement] = useState<EnumCarNavbar>(EnumCarNavbar.feature)
	const [isDisplayLessThan400px, setIsDisplayLessThan400px] = useState<boolean>(false)

	const handleActiveMenuElement = (activeElement: EnumCarNavbar) => {
		setActivatedMenuElement(activeElement)
	}

	const switchNavBar = () => {
		if (window.innerWidth <= 500) {
			setIsDisplayLessThan400px(true)
		} else {
			setIsDisplayLessThan400px(false)
		}
	}

	useEffect(() => {
		window.addEventListener('resize', switchNavBar)
		switchNavBar()
		return () => window.removeEventListener('resize', switchNavBar)
	}, [])

	return (
		<div className={cl['info-menu']} {...props}>
			{
				!isDisplayLessThan400px ?
					<CarPageNavbar
						navBarItems={carNavBar}
						activeElement={activatedMenuElement}
						handleActiveMenuElement={handleActiveMenuElement}
					/>
					:
					<CarPageNavbarSlider
						navBarItems={carNavBar}
						activeElement={activatedMenuElement}
						handleActiveMenuElement={handleActiveMenuElement}
					/>
			}

			<CarPageInfo activeElement={activatedMenuElement} />
		</div>
	)
}

export default CarPageInfoMenu
