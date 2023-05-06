import React, { FC, PropsWithChildren, useContext, useState } from 'react';
// ======= Types ======
import { carDataType } from '../types/allCarsTypes';

type carPageContextType = {
	data: carDataType
	handleCarData: (data: carDataType) => void
}

const CarPageDataContext = React.createContext<carPageContextType>(null!)

const CarPageDataProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {

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