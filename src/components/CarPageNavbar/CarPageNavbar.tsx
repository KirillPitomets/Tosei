import React, { FC } from 'react';
// ======= Enums ======
import { EnumCarNavbar } from '../../enums/EnumCarNavbar';
// ======= Styles ======
import cl from './CarPageNavbar.module.scss'
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

const CarPageNavbar: FC<Props> = ({ navBarItems, activeElement, handleActiveMenuElement }) => {

	return (
		<ul className={cn(cl.info, cl.info_marg)}>
			{
				navBarItems.map(item => (
					<li key={`carNavBar-${item.id}`}>
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
					</li>
				))
			}
		</ul>
	);
};

export default CarPageNavbar;