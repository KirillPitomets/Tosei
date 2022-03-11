import React from 'react';
// ======= Styles ======
import cl from './HeaderContent.module.scss'
import cn from 'classnames'
// ======= Components ======
import PhoneNumber from '../UI/PhoneNumber/PhoneNumber';

const HeaderContent = () => {
	return (
		<>
			<p className={cn(cl.p, cl.p_w195)}>
				Автомобили из японии с доставкой по всей России
			</p>

			<div className={cl.header__item}>
				<PhoneNumber/>
			</div>
		</>
	);
};

export default HeaderContent;