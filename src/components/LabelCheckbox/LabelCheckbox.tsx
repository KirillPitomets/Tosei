import React, { FC } from 'react'
// ======= Styles ======
import cl from './LabelCheckbox.module.scss'
// ======= Components ======
import SquareCheckbox from '../UI/SquareCheckbox/SquareCheckbox'

interface ILabelCheckbox {
	idInput: string,
	title: string,
	inputName: string
	
	formOptions: {}
}

const LabelCheckbox: FC<ILabelCheckbox> = ({ idInput, inputName, title, formOptions, ...props }) => {

	return (
		<label className={cl.label} >
			<SquareCheckbox
				idInput={idInput}
				name={inputName}

				formOptions={formOptions}
				{...props}
			/>
			<p className={cl.text}>{title}</p>
		</label>
	)
}

export default LabelCheckbox
