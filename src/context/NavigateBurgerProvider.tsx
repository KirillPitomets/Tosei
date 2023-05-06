import React, { FC, PropsWithChildren, useContext, useState } from 'react';

type NagBurgerType = {
	isVisible: boolean,
	handler: () => void
}

const NavigateBurgerContext = React.createContext<NagBurgerType>(null!)

const NavigateBurgerProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {

	const [isVisible, setIsVisible] = useState<boolean>(false)

	const handler = () => {
		setIsVisible(prev => !prev)
	}

	return (
		<NavigateBurgerContext.Provider value={{ isVisible, handler }}>
			{children}
		</NavigateBurgerContext.Provider>
	);
};

export default NavigateBurgerProvider;

export const useNavBurger = () =>  useContext(NavigateBurgerContext)