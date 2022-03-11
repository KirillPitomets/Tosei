import React, { ChangeEvent, FC } from 'react';
// ======= Styles ======
import cl from './TextInput.module.scss'
import cn from 'classnames';
// ======= Components ======

interface Props extends React.HTMLProps<HTMLInputElement> {
	inputId: string
	labelText?: string
	
	formOptions: any
}

const TextInput: FC<Props> = ({ inputId, labelText, formOptions, ...props }) => {
	return (
		<>
			{
				labelText
					?
					<label htmlFor={inputId} className={cl.label}>
						<p className={cn(cl.name, cl.name_marg)}>
							{labelText}
						</p>
						<input id={inputId} className={cl.input}
							type="text"

							{...formOptions.reg}
							{...props}
						/>
					</label>
					:
					<input id={inputId} className={cl.input}
						type="text"


						{...props}
					/>
			}
		</>
	);
};

export default TextInput;