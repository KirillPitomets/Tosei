import React from 'react';
import { Link } from 'react-router-dom'
// ======= Consts ======
import { CONSTRUCTOR_ROUTE } from '../../utils/consts';
// ======= Data ======
import cardInfo from './cardsInfo';
// ======= Images ======
import bg from '../../assets/img/howToBuy/01.png'
// ======= Styles ======
import cl from './HowToBuy.module.scss'
import cn from 'classnames'
// ======= Components ======
import Title from '../UI/Title/Title';
import InfoCard from '../InfoCard/InfoCard';
import SvgIcon from '../UI/SvgIcon/SvgIcon';


const HowToBuy = () => {

	return (
		<section className={cl.section}>
			<div className={cl.inner}>

				<div className={cl.photo}>
					<img className={cl.photo__img} src={bg} alt="Man" />
				</div>

				<div className={cl.wrapper}>

					<Title>
						Как происходит покупка
					</Title>

					<div className={cn(cl.cards, cl.cards_marg)}>

						{cardInfo.map(card => (
							<InfoCard
								key={card.title}
								title={card.title}
								des={card.des}
								icon={`${window.location.origin}/img/howToBuy/${card.icon}`}
								cardClassName={cl.card}
							/>
						))}

						<Link to={CONSTRUCTOR_ROUTE} className={cn(cl.card, cl.link)}>
							<p className={cl.link__text}>Оставить заявку</p>
							<SvgIcon svgClassName={cl.svg} iconIdName='email' viewBox='0 0 31 31' />
						</Link>

					</div>

				</div>

			</div>
		</section>
	);
};

export default HowToBuy;