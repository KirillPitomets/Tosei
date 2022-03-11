import React, { FC } from 'react'
// ======= Styles ======
import cl from './CardOfCarRow.module.scss'

type Props = {
	title: string
	value: string | number
}

const CardOfCarRow: FC<Props> = ({ title, value }) => {
	return (
		<div className={cl.row}>
			<dt className={cl.title}>{title}</dt>
			<dd className={cl.value}> {value} </dd>
		</div>
	)
}

export default CardOfCarRow
