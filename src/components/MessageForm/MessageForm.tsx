import React, { FC } from 'react';
// ======= react hook form ======
import { useForm } from 'react-hook-form';
// ======= Styles ======
import cl from './MessageForm.module.scss'
import cn from 'classnames'
// ======= Components ======
import Title from '../UI/Title/Title'
import TextInput from '../UI/TextInput/TextInput';
import NumberInput from '../UI/NumberInput/NumberInput';
import Button from '../UI/Button/Button';
import TextArea from '../UI/TextArea/TextArea';

interface Props {
	title: string
	formClassName?: string
}

const MessageForm: FC<Props> = ({ title, formClassName }) => {

	const { register, handleSubmit } = useForm()

	const onSubmit = (data: any) => {
		alert(JSON.stringify(data, null, 4))
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={cn(cl.form, formClassName)} >
			<div className={cl.wrapper}>
				<Title titleVariant={4} >
					{title}
				</Title>

				<div className={cn(cl.inner, cl.inner_marg)}>
					<TextInput
						inputId='userName-MessageForm'
						labelText='Ваше имя'

						placeholder='Ваше имя'

						formOptions={{
							reg: { ...register('userName') }
						}}
					/>
					<NumberInput
						inputId='userNumber-MessageForm'
						labelText='Контактный телефон'

						formOptions={{
							reg: { ...register('userNumber') }
						}}
					/>

					<TextArea
						label='Ваше сообщение'
						textAreaId='userText--MessageForm'
						formOptions={{
							reg: {...register('userText')}
						}}
					/>

				</div>

				<Button
					title='Проконсультировать бесплатно'
					type='submit'
				/>

			</div>
		</form>
	);
};

export default MessageForm;