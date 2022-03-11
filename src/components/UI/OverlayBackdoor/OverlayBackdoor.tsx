import React, { FC } from 'react';
// ======= Transition ======
import { CSSTransition } from 'react-transition-group';
// ======= Styles ======
import cl from './OverlayBackdoor.module.scss'

type Props = {
	isVisible: boolean
	handler: () => void
}

const OverlayBackdoor: FC<Props> = ({ isVisible, handler }) => {

	return (
		<CSSTransition in={isVisible} timeout={200} classNames='backdoor' unmountOnExit>
			<div className={cl.backdoor} onClick={handler}></div>
		</CSSTransition>
	);
};

export default OverlayBackdoor;