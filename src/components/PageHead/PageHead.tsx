import React, { FC } from 'react';
// ======= Styles ======
import cl from './PageHead.module.scss'
import cn from 'classnames';
// ======= Components ======
import Title from '../UI/Title/Title';
import NavCrumb from '../NavCrumb/NavCrumb'

type Props = {
	title: string
}

const PageHead: FC<Props> = ({title}) => {
	return (
		<div className={cn(cl.wrapper, cl.wrapper_marg)}>
			<NavCrumb/>
			
			<Title titleClassName={cl.title_marg}>{title}</Title>
		</div>
	);
};

export default PageHead;