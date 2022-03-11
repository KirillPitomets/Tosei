import React from 'react';
// ======= Styles ======
import cl from './Catalog.module.scss'
// ======= Components ======
import PageHead from '../../components/PageHead/PageHead';
import FormSelectionCar from '../../components/FromSelectionCar/FormSelectionCar';
import CarList from '../../components/CarList/CarList';

const Catalog = () => {
	return (
		<>
			<header className={cl.header}>
				<div className='container'>
					<PageHead title="Каталог техники" />
					<FormSelectionCar />
				</div>
			</header>

			<div className="container">
				<CarList />
			</div>

		</>
	);
};

export default Catalog;