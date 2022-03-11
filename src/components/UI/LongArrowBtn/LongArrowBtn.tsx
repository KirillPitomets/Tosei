import React, {FC} from 'react';
// ======= Styles ======
import cl from './LongArrowBtn.module.scss'
import cn from 'classnames'
// ======= Components ======
import SvgIcon from '../SvgIcon/SvgIcon'

type Props = {
	handleBtn: () => void
	isRotate180deg?: boolean
}

const LongArrowBtn: FC<Props> = ({handleBtn, isRotate180deg = false}) => {
	return (
		<button className={isRotate180deg ? cn(cl.btn, cl.btn_rotate) : cl.btn}
			onClick={handleBtn}
		>
			<SvgIcon
				iconIdName='long-arrow'
				viewBox='0 0 24 24'
				svgClassName={cl.arrow__svg}
			/>
		</button>
	);
};

export default LongArrowBtn;