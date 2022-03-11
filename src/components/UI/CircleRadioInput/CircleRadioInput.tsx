import React, { FC, ChangeEvent } from 'react'
import SvgIcon from '../SvgIcon/SvgIcon'
// ======= Styles ======
import cl from './CircleRadioInput.module.scss'

interface ICircleRadioInput {
	handlerRadioInput: (e: ChangeEvent<HTMLInputElement>) => void
	idInput: string
	checked: () => boolean
	name: string
	value: string
}

const CircleRadioInput: FC<ICircleRadioInput> = ({
	checked,
	handlerRadioInput,
	idInput,
	name,
	value
}) => {
	return (

		<label htmlFor={idInput} className={cl.input}>
			<input
				className={cl.input__input}
				id={idInput}
				type='radio'
				name={name}
				value={value}
				checked={checked()}
				onChange={handlerRadioInput}
			/>

			<div className={cl.input__radio}>
				<SvgIcon
					iconIdName='radio-check'
					svgClassName={cl.input__svg}
					viewBox='0 0 18 18'
				/>
			</div>
		</label>
	)
}

export default CircleRadioInput
