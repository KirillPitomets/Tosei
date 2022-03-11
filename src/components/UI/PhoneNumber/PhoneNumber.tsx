import React from 'react';
// ======= Styles ======
import cl from './PhoneNumber.module.scss'


const PhoneNumber = () => {
	return (
		<>
			<a className={cl.phone__link} href='tel:+8 800 250-78-07'>
				8 800 250-78-07
			</a>
			<p className={cl.p}>Бесплатный звонок по всей России</p>
		</>
	);
};

export default PhoneNumber;