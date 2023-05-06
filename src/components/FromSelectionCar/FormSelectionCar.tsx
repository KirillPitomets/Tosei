import React, { FC } from 'react'
// ======= Context ======
import {
	useData,
	SelectionCarFormDataType,
} from '../../context/SelectionCarDataProvider'
// ======= Styles ======
import cl from './FormSelectionCar.module.scss'
import cn from 'classnames'
// ======= react hook form ======
import { SubmitHandler, useForm } from 'react-hook-form'
// ======= Data ======
import bodyTypeCars from './data/bodyTypeCars'
import manufacturers from './data/manufacturers'
import marks from './data/marks'
import carYears from './data/carYears'
// ======= Components ======
import LabelCheckbox from '../LabelCheckbox/LabelCheckbox'
import Button from '../UI/Button/Button'
import FormSelectionItem from '../FormSelectionItem/FormSelectionItem'
import FormSelectionDateItem from '../FormSelectionDateItem/FormSelectionDateItem'

type Props = {
	formClassName?: string
}

const FormSelectionCar: FC<Props> = ({ formClassName }) => {
	const { data, setValues } = useData()

	const formOptions = {
		defaultValues: {
			typeCar: data.typeCar,
			sawCutAndConstructor: data.sawCutAndConstructor,
			fullDuty: data.fullDuty,
			manufacturer: data.manufacturer,
			mark: data.mark,
			yearOfProduction: {
				from: data.yearOfProduction.from,
				before: data.yearOfProduction.before,
			},
		},
	}

	const { register, control, handleSubmit } =
		useForm<SelectionCarFormDataType>(formOptions)

	const carsInStock: number = 256

	const onSubmit: SubmitHandler<SelectionCarFormDataType> = data => {
		alert(`Данные с формы: ${JSON.stringify(data, null, 4)} `)

		setValues(data)
	}

	return (
		<form
			className={cn(cl.form, formClassName)}
			onSubmit={handleSubmit(onSubmit)}
		>
			<div className={cl.form__wrap}>
				<div
					className={cn(
						cl.form__row,
						cl['form__row_width-402'],
						cl.form__row_labels
					)}
				>
					<LabelCheckbox
						idInput='fullDuty-checkbox'
						inputName='fullDuty'
						title='Полная пошлина'
						formOptions={{
							reg: { ...register('fullDuty') },
						}}
					/>

					<LabelCheckbox
						idInput='sawCutAndConstructor-checkbox'
						inputName='sawCutAndConstructor'
						title='Распил или конструктор'
						formOptions={{
							reg: { ...register('sawCutAndConstructor') },
						}}
					/>
				</div>

				<div className={cn(cl.form__row, cl['form__row_neg-marg'])}>
					<FormSelectionItem
						title='Тип механики'
						name='bodyTypeCar'
						control={control}
						defaultText={formOptions.defaultValues.typeCar}
						dropdownItems={bodyTypeCars}
					/>

					<FormSelectionItem
						title='Производитель'
						name='manufacturer'
						control={control}
						defaultText={formOptions.defaultValues.manufacturer}
						dropdownItems={manufacturers}
					/>

					<FormSelectionItem
						title='Марка'
						name='mark'
						control={control}
						defaultText={formOptions.defaultValues.mark}
						dropdownItems={marks}
					/>

					<FormSelectionDateItem
						title='Год выпуска'
						control={control}
						nameFrom='from'
						nameBefore='before'
						defaultDate={formOptions.defaultValues.yearOfProduction}
						dropdownItems={carYears}
					/>

					<div className={cl.item_btn}>
						<Button title='Найти' type='submit' />
					</div>
				</div>
				<div className={cl.form__row}>
					<p className={cl.placeholder}>
						Автомобилей в наличии :
						<span className={cl.stock}> {carsInStock} </span>
					</p>
				</div>
			</div>
		</form>
	)
}

export default FormSelectionCar
