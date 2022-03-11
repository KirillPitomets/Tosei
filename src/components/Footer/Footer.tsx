import React from 'react';
// ======= Data ======
import socialsContacts from './data/socialsContacts'
// ======= Styles ======
import cl from './Footer.module.scss'
import cn from 'classnames'
// ======= Components ======
import ContactLine from '../UI/ContactLine/ContactLine';
import MailLink from '../UI/MailLink/MailLink';
import SvgIcon from '../UI/SvgIcon/SvgIcon';


const Footer = () => {
	return (
		<footer className={cl.footer}>
			<div className='container'>
				<div className={cl.footer__wrapper}>

					<div className={cl.footer__item}>
						<h3 className={cl.title}>© Тосэй 2021. Все права защищены</h3>
						<p className={cn(cl.text, cl.text_marg)}>
							Продажа грузовой и спецтехники, легковых автомобилей,
							водной техники. Любая техника из Японии, США,
							Кореи, Китая и Сингапура. Авто с аукционов.
						</p>
					</div>

					<div>
						{socialsContacts.map(social => (
							<ContactLine key={social.contact} icon={social.icon} number={social.contact} />
						))}
					</div>

					<div>
						<MailLink email='spec@tosei.ru' />
					</div>
				</div>
				<a className={cl.link} href="https://goo.gl/maps/nhKs8hCzUWyfkX7VA">
					<SvgIcon svgClassName={cl.svg} iconIdName='mark' viewBox='0 0 20 20' />
					Владивосток, ул. Фадеева, д. 47, строение 1
				</a>
			</div>
		</footer>
	);
};

export default Footer;