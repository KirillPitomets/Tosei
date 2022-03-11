import React, { FC } from 'react';
// ======= Styles ======
import cl from './TextArea.module.scss'

type Props = {
	label: string
	textAreaId: string
	formOptions: any
}

const TextArea: FC<Props> = ({ label, textAreaId, formOptions }) => {


	return (
		<>
			<label htmlFor={textAreaId}>
				{label}
			</label>
			<textarea  className={cl.textarea} id={textAreaId} {...formOptions.reg} />
		</>

	);
};

export default TextArea;