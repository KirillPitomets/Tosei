import React from 'react';
// ======= Styles ======
import cl from './Ellipsis.module.scss'

const Ellipsis = () => {
	return (
		<span className={cl.ellipsis}>
			<div className={cl.dot}></div>
			<div className={cl.dot}></div>
			<div className={cl.dot}></div>	
		</span>
	);
};

export default Ellipsis;