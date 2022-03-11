import React, { FC } from 'react'
// ======= Styles ======
import cl from './FormSelectionDateItem.module.scss'
// ======= react hooks form ======
import { Controller } from 'react-hook-form'
// ======= Components ======
import {
	DropdownWithActiveElement,
	DropdownWithActiveElementItem,
} from '../UI/DropdownWithActiveElement/DropdownWithActiveElement'

interface IFormSelectionDateItem {
	title: string
	dropdownItems: { before: number[], from: number[] }
	nameBefore: string
	nameFrom: string
	control: any
	defaultDate: { from: number, before: number }
}

const FormSelectionDateItem: FC<IFormSelectionDateItem> = ({
	title,
	dropdownItems,
	control,
	nameFrom,
	nameBefore,
	defaultDate
}) => {
	return (

		<div className={cl.item}>
			<p className={cl.item__title}> {title} </p>

			<div className={cl.item__wrap}>
				<div className={cl.item__box}>
					{/* ==== From ==== */}
					<Controller
						name={`yearOfProduction.${nameFrom}`}
						control={control}
						defaultValue={defaultDate.from}
						render={({ field: { onChange, value } }) =>
							<>
								<DropdownWithActiveElement activeText={value} defaultText='от'>
									{dropdownItems['from'].map(item => (
										<DropdownWithActiveElementItem
											key={item}
											itemValue={item}
											handlerDate={onChange}
											type={'number'}
										>
											{item}
										</DropdownWithActiveElementItem>
									))}
								</DropdownWithActiveElement>
							</>
						}
					/>
				</div>

				<div className={cl.item__box}>

					{/* ==== Before ==== */}
					<Controller
						name={`yearOfProduction.${nameBefore}`}
						control={control}
						defaultValue={defaultDate.before}
						render={({ field: { onChange, value } }) =>
							<>
								<DropdownWithActiveElement activeText={value} defaultText='до'>
									{dropdownItems['before'].map(item => (
										<DropdownWithActiveElementItem
											key={item}
											itemValue={item}
											handlerDate={onChange}
											type={'number'}
										>
											{item}
										</DropdownWithActiveElementItem>
									))}
								</DropdownWithActiveElement>
							</>
						}
					/>
				</div>
			</div>
		</div>
	)
}

export default FormSelectionDateItem
