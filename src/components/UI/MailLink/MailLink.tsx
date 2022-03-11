import React, { FC } from 'react';
// ======= Styles ======
import cl from './MailLink.module.scss'
// ======= Components ======
import SvgIcon from '../SvgIcon/SvgIcon';

type Props = {
	email: string
}

const MailLink: FC<Props> = ({email}) => {
	return (
		<a className={cl.link} href={`mailto:${email}`} target="_top">
			<SvgIcon svgClassName={cl.svg} iconIdName='email' viewBox='0 0 20 20' />
			{email}
		</a>
	);
};

export default MailLink;