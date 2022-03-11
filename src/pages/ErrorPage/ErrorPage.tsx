import React from 'react';
// ======= Styles ======
import cl from './ErrorPage.module.scss'
import cn from 'classnames'
// ======= Components ======
import SvgIcon from '../../components/UI/SvgIcon/SvgIcon';

const ErrorPage = () => {
	return (
		<div className={cl.wrap}>
			<SvgIcon svgClassName={cl.car}  iconIdName='broken-car'/>
			<h1 className={cn(cl.title, cl.title_marg)}>
				Error 404 :(
			</h1>
		</div>
	);
};

export default ErrorPage;