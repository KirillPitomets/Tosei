import React, { FC, useContext, useState } from 'react';
import { allCars } from '../api/allCars/allCars';
// ======= Types ======
import { carDataType } from '../types/allCarsTypes';

type carPageContextType = {
	data: carDataType
	handleCarData: (data: carDataType) => void
}

const CarPageDataContext = React.createContext<carPageContextType>(null!)

const CarPageDataProvider: FC = ({ children }) => {

	const [carData, setCarData] = useState<carDataType>(null!)

	const handleCarData = (data: carDataType) => {
		setCarData(data)
	}

	return (
		<CarPageDataContext.Provider value={{
			data: carData,
			handleCarData,
		}}>
			{children}
		</CarPageDataContext.Provider>
	);
};

export default CarPageDataProvider;

export const useCarData = () => useContext(CarPageDataContext)