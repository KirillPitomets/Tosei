import React, { FC } from 'react'
// ======= Styles ======
import cl from './Title.module.scss'
import cn from 'classnames'

export enum titlePositionVariants {
	'center',
	'left',
}

type Props = {
	posTitle?: titlePositionVariants
	titleVariant?: 2 | 4
	titleClassName?: string
}

const Title: FC<Props> = ({ posTitle = titlePositionVariants.left, titleVariant = 2, titleClassName, children }) => {
	return (
		<>
			{
				titleVariant === 2
					?
					<h2
						className={
							posTitle === titlePositionVariants.left
								? cn(cl.title, titleClassName)
								: cn(cl.title, titleClassName, cl.title_center)
						}
					>
						{children}
					</h2>
					:
					<h4
						className={
							posTitle === titlePositionVariants.left
								? cn(cl.title, titleClassName)
								: cn(cl.title, titleClassName, cl.title_center)
						}
					>
						{children}
					</h4>
			}
		</>
	)
}

export default Title