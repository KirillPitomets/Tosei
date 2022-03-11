import React from 'react'
// ======= Styles ======
import cl from './HomeBanner.module.scss'
import cn from 'classnames'
// ======= Components ======
import FormSelectionCar from '../../components/FromSelectionCar/FormSelectionCar'

const HomeBanner = () => {
	return (
		<section className={cl.section}>
			<div className={cl.wrap}>
				<h1 className={cn(cl.title, cl.title_marg)}>
					Доставим любую технику из Японии за 3 недели
				</h1>
				<FormSelectionCar formClassName={cl.form}/>
			</div>
		</section>
	)
}

export default HomeBanner
