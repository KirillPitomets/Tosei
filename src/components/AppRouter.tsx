import React from 'react'
// ======= Router =======
import { Routes, Route } from 'react-router-dom'
// ======= Data =======
import { routes } from '../router/mainRouter'

const AppRouter = () => {
	return ( 
		<Routes>
			{routes.map(route => (
				<Route
					key={route.path}
					path={route.path}
				>
					{route.component}
				</Route>
			))}
		</Routes>
	)
}

export default AppRouter
