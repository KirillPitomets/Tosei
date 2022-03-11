import React, { FC } from 'react';
// ======= Enums ======
import variantStatusCar from '../../../enums/variantStatusCar';
// ======= Utils ======
import { translateCarStatusIntoRus } from '../../../utils/translateCarStatusIntoRus';
// ======= Styles ======
import cl from './StatusCar.module.scss'
import cn from 'classnames'

interface IStatusCar extends React.HTMLAttributes<HTMLDivElement> {
	status: variantStatusCar
}

const StatusCar: FC<IStatusCar> = ({ status, className }) => {
	
	return (

		<div className={cn(cl.status, className)}>
			<p
				className={cn(
					cl.status__text,
					status === variantStatusCar.inStock
						? cl['status__text_in-stock']
						: cl['status__text_under-order']
				)}
			>
				{translateCarStatusIntoRus(status)}
			</p>
		</div>

	);
};

export default StatusCar;