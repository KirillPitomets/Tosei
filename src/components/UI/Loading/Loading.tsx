import React from 'react'
// ======= Styles ======
import cl from './Loading.module.scss'
// ======= Components ======
import SvgIcon from '../SvgIcon/SvgIcon'
import BounceLoading from '../BounceLoading/BounceLoading'


const Loading = () => {
	return (
		<div className={cl.loading}>

			<BounceLoading />

			<div className={cl.loading__wrap}>
				<div className={cl.loading__car}>
					<SvgIcon
						iconIdName='car'
						svgClassName={cl.loading__svg}
						viewBox='0 0 420 420'
					/>
				</div>
			</div>
		</div>
	)
}

export default Loading
