import React, { FC } from 'react';
// ======= Styles ======
import cl from './BounceLoading.module.scss'
import cn from 'classnames'

type Props = {
	title?: string
}

const BounceLoading: FC<Props> = ({ title }) => {
	return (
		<>
			<p className={cn(cl.text, cl.text_marg)}>
				{!title && 'Загрузка' }
				<span className={cl.bounce}></span>
				<span className={cl.bounce}></span>
				<span className={cl.bounce}></span>
			</p>
		</>
	);
};

export default BounceLoading;