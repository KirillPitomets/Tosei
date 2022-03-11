import React, { FC } from 'react';
// ======= hooks ======
import useFormatPhoneNumber from '../../../hooks/useFormatPhoneNumber';
// ======= Styles ======
import cl from './ContactLine.module.scss'
// ======= Components ======
import SvgIcon from '../SvgIcon/SvgIcon';

export enum LinkVariants {
	social,
	phoneNumber
}

type Props = {
	icon: string
	number: number
	type?: LinkVariants
	title?: string
	path?: string
}

const ContactLine: FC<Props> = ({ number, title, type = LinkVariants.phoneNumber, path, icon }) => {

	const formatNumber = useFormatPhoneNumber()

	return (
		<p className={cl.contact}>
			<span className={cl.contact__line}>
				<SvgIcon iconIdName={icon} svgClassName={cl.svg} />

				{
					type === LinkVariants.social ?
						<a href={path} className={cl.text} target='_blank' rel='noreferrer'>
							{formatNumber(number)}
						</a>
						:
						<a href={`tel:${number}`} className={cl.number}>
							{formatNumber(number)}
						</a>
				}
			</span>

			{title && <span className={cl.title}> {title} </span>}

		</p>
	);
};

export default ContactLine;