import React, { FC } from 'react'
// ======= Data ======
import socialsArray from './Data/socialItems'
// ======= Styles ======
import cl from './Socials.module.scss'

const Socials: FC<React.HTMLAttributes<HTMLUListElement>> = ({...props}) => {
	return (
		<ul className={cl.socials} {...props}>
			{socialsArray.map(item => (
				<li key={item.name} className={cl.socials__item}>
					<a href={item.path} target='_blank' rel='noreferrer'>
						<img
							src={`${window.location.origin}/img/socials/${item.icon}`}
							alt={item.name}
						/>
					</a>
				</li>
			))}
		</ul>
	)
}

export default Socials
