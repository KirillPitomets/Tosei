import React, { FC } from 'react'
// ======= Styles ======
import cn from 'classnames'
import cl from './Button.module.scss'

export enum ButtonVariants {
	outline,
	solid
}

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	title: string
	styleVariant?: ButtonVariants
	classNameButton?: string
}

const Button: FC<IButton> = ({
	title,
	classNameButton,
	styleVariant = ButtonVariants.solid,
	onClick,
	...props
}) => {
	return (
		<button
			className={
				styleVariant === ButtonVariants.solid
					?
					cn(cl.btn, classNameButton)
					:
					cn(cl.btn, cl.btn_outline, classNameButton)
			}
			onClick={onClick}
			{...props}
		>
			<p className={cl.btn__title}>{title}</p>
		</button>
	)
}

export default Button
