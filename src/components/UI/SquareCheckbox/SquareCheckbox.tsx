import React, { FC } from 'react'
// ======= Styles ======
import cl from './SquareCheckbox.module.scss'
// ======= Components ======
import SvgIcon from '../SvgIcon/SvgIcon'


interface ISquareCheckbox extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	idInput: string
	formOptions: any
}

const SquareCheckbox: FC<ISquareCheckbox> = ({ idInput, formOptions, ...props }) => {
	

	return (
		<label htmlFor={idInput} className={cl.input}>
			<input
				className={cl.input__input}

				id={idInput}
				type='checkbox'

				{...formOptions.reg}
				{...props}
			/>

			<div className={cl.input__check}>
				<SvgIcon
					iconIdName='check'
					svgClassName={cl.input__svg}
					viewBox='0 0 18 18'
				/>
			</div>
		</label>
	)
}

export default SquareCheckbox
