import React, { FC } from 'react'
// ======= Data ======
import numbers from './data/numbers'
import socialsContacts from './data/socialsContacts'
// ======= Styles ======
import cl from './ContactsHeader.module.scss'
import cn from 'classnames'
// ======= Components ======
import ContactLine, {LinkVariants} from '../UI/ContactLine/ContactLine'
import MailLink from '../UI/MailLink/MailLink'

type Props = {
	location: string
}

const ContactsHeader: FC<Props> = ({ location }) => {
	return (
		<div className={cn(cl.header, cl.header_marg)}>

			<a href={location} className={cl.address} target='_blank' rel='noreferrer'>
				Владивосток, ул. Фадеева, д. 47 строение 1
			</a>

			<div className={cn(cl.wrapper, cl.wrapper_marg)}>

				<div>
					{numbers.map(contact => (
						<ContactLine key={contact.number} title={contact.title} number={contact.number} icon={contact.icon} />
					))}
				</div>

				<div>
					{socialsContacts.map(social => (
						<ContactLine
							key={social.contact}
							number={social.contact}
							icon={social.icon}
							type={LinkVariants.social}
							path={social.path}
						/>
					))}
				</div>

				<div>
					<MailLink email='spec@tosei.ru'/>
				</div>

			</div>


		</div>
	)
}

export default ContactsHeader
