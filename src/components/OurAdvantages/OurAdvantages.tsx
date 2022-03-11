import React, { FC } from 'react';
// ======= Data ======
import list from './ourAdvantagesList'
// ======= Images ======
import icon from '../../assets/img/ourAdvantages/icon.svg'
// ======= Styles ======
import cl from './OurAdvantages.module.scss'
import cn from 'classnames'
// ======= Components ======
import Title, { titlePositionVariants } from '../UI/Title/Title';
import InfoCard from '../InfoCard/InfoCard';


const OurAdvantages: FC = () => {
	return (
		<section className={cl.section_marg}>
				<Title posTitle={titlePositionVariants.center}>Наши преимущества</Title>

				<div className={cn(cl.wrapper, cl.wrapper_marg)}>
					{list.map(card => (
						<InfoCard
							key={card.title}
							cardClassName={cl.card}
							title={card.title}
							des={card.des}
							icon={icon}
						/>
					))}
				</div>

		</section>
	);
};

export default OurAdvantages;