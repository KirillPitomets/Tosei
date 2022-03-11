import React, { FC } from 'react';
// ======= Enums ======
import { EnumCarNavbar } from '../../enums/EnumCarNavbar';
// ======= Splide ======
import { Splide, SplideSlide } from '@splidejs/react-splide';
// ======= Styles ======
import cl from './CarPageNavbarSlider.module.scss'
import cn from 'classnames';

type navBarItemsType = {
	id: EnumCarNavbar
	title: string
}

type Props = {
	navBarItems: navBarItemsType[]
	activeElement: EnumCarNavbar
	handleActiveMenuElement: (value: EnumCarNavbar) => void
}

const CarPageNavbarSlider: FC<Props> = ({ navBarItems, activeElement, handleActiveMenuElement }) => {

	const options = {
		fixedWidth: 'auto',
		perPage: 1,
		pagination: false,
		arrows: false,
	}

	return (
		<Splide options={options} className={cn(cl.info, cl.info_marg)} >
			{
				navBarItems.map(item => (
					<SplideSlide key={`carPageNavBar-${item.id}`} className={cl.info__slide}>
						<button className={
							activeElement === item.id
								?
								cn(cl.info__btn, cl.info__btn_active)
								:
								cl.info__btn
						}
							onClick={() => handleActiveMenuElement(item.id)}>
							{item.title}
						</button>
					</SplideSlide>
				))
			}
		</Splide>
	);
};

export default CarPageNavbarSlider;

