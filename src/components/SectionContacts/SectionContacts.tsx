import React, { FC } from 'react';
// ======= Styles ======
import cl from './SectionContacts.module.scss'
// ======= Components ======
import Title from '../UI/Title/Title';
import ContactsHeader from '../ContactsHeader/ContactsHeader';
import Map from '../Map/Map';
import PhoneNumberForm from '../PhoneNumberForm/PhoneNumberForm';

type Props = {
	title?: string
	formOnMap?: React.ReactNode
}

const SectionContacts: FC<Props> = ({ title, formOnMap }) => {
	return (
		<section className={cl.section}>

			<Title>
				{title}
			</Title>

			<ContactsHeader location='https://goo.gl/maps/TbVey39GhZT7GwQQA' />

			<Map mapClassName={cl.map}>
				{ formOnMap }
			</Map>


		</section>
	);
};

export default SectionContacts;