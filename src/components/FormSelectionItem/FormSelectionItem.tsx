import React, { FC, useState } from 'react'
// ======= Styles ======
import cl from './FormSelectionItem.module.scss'
// ======= React hook form ======
import { Controller, } from 'react-hook-form'
// ======= Components ======
import {
	DropdownWithActiveElement,
	DropdownWithActiveElementItem,
} from '../UI/DropdownWithActiveElement/DropdownWithActiveElement'

interface IFormSelectionItem {
	title: string
	defaultText?: string
	dropdownItems: string[]
	name: string

	control: any
}

const FormSelectionItem: FC<IFormSelectionItem> = ({
	title,
	defaultText,
	name,
	dropdownItems,
	control
}) => {

	return (
		<div className={cl.item}>
			<Controller
				control={control}
				name={name}
				defaultValue={defaultText}
				render={({ field: { onChange, value } }) => (
					<>
						<p className={cl.item__title}>{title}</p>

						<DropdownWithActiveElement
							defaultText={defaultText}
							activeText={value}
						>
							{dropdownItems.map(item => (
								<DropdownWithActiveElementItem
									key={item + title}
									itemValue={item}
									handler={onChange}
								>
									{item}
								</DropdownWithActiveElementItem>
							))}
						</DropdownWithActiveElement>
					</>
				)}
			/>
		</div >
	)
}

export default FormSelectionItem
