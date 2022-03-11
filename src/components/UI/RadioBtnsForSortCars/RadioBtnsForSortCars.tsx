import React, { FC, useEffect } from 'react';
// ======= Data ======
import radioBtnsTypeSort from './data/radioBtnsTypeSort';
// ======= Hooks ======
import useRadioInput from '../../../hooks/useRadioInput'
// ======= Styles ======
import cl from './RadioBtnsForSortCars.module.scss'
import cn from 'classnames'
// ======= Components ======
import CircleRadioInput from '../CircleRadioInput/CircleRadioInput';

type Props = {
	setTypeSortCars?: React.Dispatch<React.SetStateAction<string>>
}

const RadioBtnsForSortCars: FC<Props> = ({ setTypeSortCars }) => {

	const typeSortCars = useRadioInput(radioBtnsTypeSort[0].sortName)

	// Effect
	useEffect(() => {
		if (setTypeSortCars) {
			setTypeSortCars(typeSortCars.value)
		}
	}, [typeSortCars.value])

	return (
		<div className={cn(cl.btns, cl.btns_marg)}>

			{radioBtnsTypeSort.map(sortItem => (
				<label
					key={sortItem.sortName}
					className={cl.btns__label}
					htmlFor={sortItem.sortName}
				>
					<CircleRadioInput
						key={sortItem.sortName}
						name='typeSortCars'
						idInput={sortItem.sortName}
						value={sortItem.sortName}
						checked={() => typeSortCars.value === sortItem.sortName}
						handlerRadioInput={typeSortCars.handlerRadioInput}
					/>

					<p className={cl.btns__title}>{sortItem.sortTitle}</p>
				</label>
			))}

		</div>
	);
};

export default RadioBtnsForSortCars;