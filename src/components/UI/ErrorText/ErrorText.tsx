import React, { FC, PropsWithChildren } from 'react';
// ======= Styles ======
import cl from './ErrorText.module.scss'
import cn from 'classnames'

type ErrorTextType = {
	remFontSize?: number
}

const ErrorText: FC<PropsWithChildren<ErrorTextType>> = ({children, remFontSize = 1}) => {
	return (
		<h1 style={{fontSize: `${remFontSize}rem`}} className={cn(cl.title, cl.title_marg)}>
			{children}
		</h1>
	);
};

export default ErrorText;