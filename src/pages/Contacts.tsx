import React from 'react';
// ======= Components ======
import NavCrumb from '../components/NavCrumb/NavCrumb';
import SectionContacts from '../components/SectionContacts/SectionContacts';
import MessageForm from '../components/MessageForm/MessageForm';
import FormWrapperForMap from '../components/UI/FormWrapperForMap/FormWrapperForMap';

const Contact = () => {
	return (
		<div className="container">
			<NavCrumb />
			<SectionContacts
				title='Контакты'
				formOnMap={
					<FormWrapperForMap>
						<MessageForm title='Написать нам' />
					</FormWrapperForMap>
				}
			/>
		</div>
	);
};

export default Contact;