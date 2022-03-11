import React, { useState, useContext } from 'react'
import classNames from 'classnames'
// ======= Styles ======
import cl from './Dropdown.module.scss'
import cn from 'classnames'
// ======= Components ======
import SvgIcon from '../SvgIcon/SvgIcon'

interface IDropdown {
	title: string
	titleClassName?: string
	dropdownClassName?: string
}

export const Dropdown: React.FC<IDropdown> = ({
	children,
	title,
	titleClassName,
	dropdownClassName
}) => {

	const [visibleDropdown, setVisibleDropdown] = useState(false)

	const handlerDropdown = () => {
		setVisibleDropdown(prev => !prev)
	}

	return (
		<div className={cn(cl.dropdown, dropdownClassName)} >
			{/* Header title */}
			<div className={cl.dropdown__head} onClick={handlerDropdown}> 
				{/* Title */}
				<p className={titleClassName}>{title}</p>

				{/* arrow */}
				<div className={
						visibleDropdown ? cl.arrow : cn(cl.arrow, cl.arrow_rotate)
					}
				>
					<SvgIcon iconIdName='arrow' viewBox='0 0 12 12' />
				</div>
			</div>

			{/* Content / List */}
			{visibleDropdown ? children : null}
		</div>
	)
}

export const DropdownList: React.FC = ({ children }) => {
	return <ul className={cl.dropdown__list}>{children}</ul>
}

interface IDropdownItemList {
	dropdownItemClassName?: string
}

export const DropdownItemList: React.FC<IDropdownItemList> = ({
	children, dropdownItemClassName }) => {
	return (
		<li className={dropdownItemClassName
			?
			cn(cl.dropdown__item, dropdownItemClassName)
			:
			cl.dropdown__item}
		>
			{children}
		</li>
	)
}
