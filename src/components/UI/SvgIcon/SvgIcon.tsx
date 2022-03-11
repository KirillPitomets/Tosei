import React from 'react';
// ======= Sprite ======
import sprite from './sprite.svg'

type svgIconType = {
	iconIdName: string,
	viewBox?: string,
	svgClassName?: string
}

const SvgIcon: React.FC<svgIconType> = ({iconIdName, viewBox, svgClassName}) => {
	return (
		<svg style={{maxWidth: '100%'}} viewBox={viewBox} className={svgClassName}>
			<use xlinkHref={`${sprite}#${iconIdName}`}/>
		</svg>
	);
};

export default SvgIcon;