import React, { FC } from 'react';
// ======= Styles ======
import cl from './FormWrapperForMap.module.scss'
import cn from 'classnames'

const FormWrapperForMap: FC = ({children}) => {
	return (
		<div className={cn(cl.form, cl.form_marg)}>
			{children}
		</div>
	);
};

export default FormWrapperForMap;