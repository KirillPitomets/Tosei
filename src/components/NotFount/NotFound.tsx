import React, { FC } from 'react';
// ======= Styles ======
import cl from './NotFound.module.scss'


interface INotFound {
	title: string
}

const NotFound: FC<INotFound> = ({title}) => {
	return (
		<div className={cl.wrapper}>
			<p className={cl.text}> {title} не найдено :( </p>
		</div>
	);
};

export default NotFound;