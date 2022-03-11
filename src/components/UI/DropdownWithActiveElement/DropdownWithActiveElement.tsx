import React, { FC, useState } from 'react'
// ======= CSSTransition ======
import { CSSTransition } from 'react-transition-group'
// ======= Styles ======
import cl from './DropdownWithActiveElement.module.scss'
import classNames from 'classnames'
// ======= Components ======
import SvgIcon from '../SvgIcon/SvgIcon'

interface IDropdownWithActiveElement {
	defaultText?: string
	activeText: string
	zIndexList?: number
}

export const DropdownWithActiveElement: FC<IDropdownWithActiveElement> = ({
	defaultText,
	activeText,
	children,
}) => {
	
	const [isVisibleDropdownList, setIsVisibleDropdownList] = useState(false)

	const handlerVisibleDropdown = () => {
		setIsVisibleDropdownList(prev => !prev)
	}

	return (
		<div className={cl.dropdown} onClick={handlerVisibleDropdown}>
			<div className={cl.dropdown__active}>
				<p>{activeText || defaultText }</p>
				<div className={isVisibleDropdownList
					? classNames(cl.dropdown__arrow, cl.dropdown__arrow_active)
					: cl.dropdown__arrow
				}
				>
					<SvgIcon
						svgClassName={cl.svg}
						iconIdName='arrow'
						viewBox='0 0 12 12'
					/>
				</div>
			</div>

			<div className={cl.dropdown__wrap}>
				<CSSTransition in={isVisibleDropdownList} timeout={200} classNames='dropdown-list-animation' unmountOnExit>
					<ul className={cl.dropdown__list} >
						{children}
					</ul>
				</CSSTransition>
			</div>

		</div>
	)
}

export enum EnumTypesHandler {
	string,
	num,
}

interface IDropdownActiveElementItemString {
	type?: 'string'
	itemValue: string
	handler: (value: string) => void
	handlerDate?: any
}

interface IDropdownActiveElementItemNumber {
	type?: 'number'
	itemValue: number
	handlerDate: (date: number) => void
	handler?: any
}

type Props = IDropdownActiveElementItemString | IDropdownActiveElementItemNumber

export const DropdownWithActiveElementItem: FC<Props> = ({
	type = 'string',
	children,
	itemValue,
	handler,
	handlerDate
}) => {
	return (
		<li
			className={cl.dropdown__item}
			value={itemValue}
			onClick={type === 'string'
				? () => handler(itemValue)
				: () => handlerDate(itemValue)
			}
		>
			{children}
		</li>
	)
}
