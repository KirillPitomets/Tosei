import React, { FC } from 'react';
// ======= react hook form ======
import { useForm } from 'react-hook-form';
// ======= Styles ======
import cl from './PhoneNumberForm.module.scss'
import cn from 'classnames'
// ======= Components ======
import Title from '../UI/Title/Title'
import TextInput from '../UI/TextInput/TextInput';
import NumberInput from '../UI/NumberInput/NumberInput';
import Button from '../UI/Button/Button';

interface Props {
	title: string
	formClassName?: string
}

const PhoneNumberForm: FC<Props> = ({ title, formClassName }) => {

	const { register, handleSubmit } = useForm()

	const onSubmit = (data: any) => {
		alert(JSON.stringify(data, null, 4))
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={cn(cl.form, formClassName)} >
			<div className={cl.wrapper}>
				<Title titleVariant={4} > {title} </Title>

				<div className={cn(cl.inner, cl.inner_marg)}>
					<TextInput
						inputId='userName-Feedback'
						labelText='Ваше имя'

						placeholder='Ваше имя'

						formOptions={{
							reg: { ...register('userName') }
						}}
					/>
					<NumberInput
						inputId='userNumber-Feedback'
						labelText='Контактный телефон'

						formOptions={{
							reg: { ...register('userNumber') }
						}}
					/>

				</div>

				<Button title='Проконсультировать бесплатно'
					type='submit'
				/>

			</div>
		</form>
	);
};

export default PhoneNumberForm;