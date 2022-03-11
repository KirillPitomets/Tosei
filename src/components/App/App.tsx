import React from 'react'
import { Routes, Route } from 'react-router-dom'
// ======= Router ======
import { routes } from '../../router/mainRouter'
// ======= Context ======
import { useNavBurger } from '../../context/NavigateBurgerProvider'
// ======= Components ======
import Aside from '../Aside/Aside'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import OverlayBackdoor from '../UI/OverlayBackdoor/OverlayBackdoor'


const App = () => {

	const navBurger = useNavBurger()

	return (
		<div className='main-wrapper'>

			<Aside />

			<div className='main-content'>

				<Header />

				<OverlayBackdoor isVisible={navBurger.isVisible} handler={navBurger.handler} />

				{/* // ======= Pages ====== */}
				<Routes>
					{routes.map(route => (
						<Route key={route.path} path={route.path} element={<route.component />} />
					))}
				</Routes>


				<Footer />
			</div>


		</div>
	)
}

export default App