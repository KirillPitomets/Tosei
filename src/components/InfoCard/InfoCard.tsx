import React, { FC } from 'react';
// ======= Styles ======
import cl from './InfoCard.module.scss'
import cn from 'classnames';

interface InterfaceInfoCard {
	title: string
	des: string
	icon: string
	cardClassName?: string
}

const InfoCard: FC<InterfaceInfoCard> = ({
	title, des, icon, cardClassName }) => {
	return (
		<div className={cardClassName ? cn(cl.card, cardClassName) : cl.card }>
			<img className={cl.icon} src={icon} alt="" />
			<h3 className={cl.title}> {title} </h3>
			<p className={cl.des}>
				{des}
			</p>
		</div>
	);
};

export default InfoCard;