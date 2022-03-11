import React, { FC, useEffect, useState } from 'react';
// ======= Styles ======
import cl from './ToggleButton.module.scss'

type Props = {
	isActive: boolean
	handler: () => void
}

const ToggleButton: FC<Props> = ({ isActive, handler }) => {
	/*
		cl.line is the first className to be added to the element
	*/
	const classesForAnimation: string[] = [cl.line, cl.line_width, cl['line_pos-0'], cl.line_transform]
	const animationStepsDelay: number[] = [25, 50, 100]

	const [rootClasses, setRootClasses] = useState<string[]>([cl.line]);

	const addClassesForAnimation = () => {

		setRootClasses([...classesForAnimation].splice(0, 2))

		// 1 className = 1 animation step delay 
		animationStepsDelay.forEach((delay, indx) => {
			setTimeout(() => {
				setRootClasses([...classesForAnimation].splice(0, 2 + indx))
			}, delay)
		})

	}

	const removeClassesForAnimation = () => {
		setRootClasses([...classesForAnimation].splice(0, 2))

		setTimeout(() => {
			setRootClasses([classesForAnimation[0]])
		}, 200);
	}

	// ======= Effect ======
	useEffect(() => {
		isActive ? addClassesForAnimation() : removeClassesForAnimation()
	}, [isActive])

	return (
		<button className={cl.btn} onClick={handler}>
			<span className={rootClasses.join(' ')}></span>
		</button>
	);
};

export default ToggleButton;