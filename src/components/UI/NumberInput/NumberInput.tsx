import React, { FC } from 'react';
// ======= Styles ======
import cl from './NumberInput.module.scss'
import cn from 'classnames'
// ======= Components ======
import InputMask from 'react-input-mask'

interface Props {
	inputId: string
	labelText: string

	formOptions: any
}

const NumberInput: FC<Props> = ({ inputId, labelText, formOptions }) => {

	return (
		<>
			{
				labelText
					?
					<label htmlFor={inputId} className={cl.label}>
						<p className={cn(cl.name, cl.name_marg)}>
							{labelText}
						</p>
						<InputMask className={cl.input} id={inputId}
							mask='+7\ 999 999 99-99'
							placeholder='+7'
							type='tel'
							inputMode='tel'
							{...formOptions.reg}
						/>
					</label>
					:
					<InputMask className={cl.input}
						mask='+7\ 999 999 99-99'
						placeholder='+7'
						inputMode='tel'
						type='tel'
						{...formOptions.reg}
					/>
			}
		</>
	);
};

export default NumberInput;