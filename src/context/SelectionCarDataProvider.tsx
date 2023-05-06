import React, { createContext, FC, useState, useContext, PropsWithChildren } from 'react';

export type SelectionCarFormDataType = {
	typeCar: string | null
	manufacturer: string | null
	mark: string | null
	yearOfProduction: { from: number, before: number }
	sawCutAndConstructor: boolean
	fullDuty: boolean
}

type ContextTypes = {
	data: SelectionCarFormDataType
	setValues: (values: {}) => void
}

const SelectionCarDataContext = createContext<ContextTypes>(null!)

const SelectionCarDataProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {

	const [data, setData] = useState({
		typeCar: null,
		manufacturer: null,
		mark: null,
		yearOfProduction: { from: 2000, before: 2021 },
		sawCutAndConstructor: true,
		fullDuty: true,
	})

	const setValues = (values: {}) => {
		setData(prevData => ({
			...prevData,
			...values
		}))
	}

	return (
		<SelectionCarDataContext.Provider value={
			{
				data,
				setValues
			}
		}>
			{children}
		</SelectionCarDataContext.Provider>
	);
};

export default SelectionCarDataProvider;

export const useData = () => useContext(SelectionCarDataContext)