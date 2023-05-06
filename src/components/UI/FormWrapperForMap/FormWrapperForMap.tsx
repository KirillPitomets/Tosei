import React, { FC, PropsWithChildren } from 'react';
// ======= Styles ======
import cl from './FormWrapperForMap.module.scss'
import cn from 'classnames'

const FormWrapperForMap: FC<PropsWithChildren<unknown>> = ({children}) => {
	return (
		<div className={cn(cl.form, cl.form_marg)}>
			{children}
		</div>
	);
};

export default FormWrapperForMap;