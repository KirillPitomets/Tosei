import React, { useEffect, useState } from 'react';
// ======= Context ======
import { useCarData } from '../../context/CarPageDataProvider';
// ======= styles ======
import cl from './CarPageAdditionalInformation.module.scss'

const CarPageAdditionalInformation = () => {

	const { data } = useCarData()

	const [paragraphs, setParagraphs] = useState<string[]>([''])

	useEffect(() => {
		setParagraphs(data.additionalInformation)
	}, [data])

	return (
		<div className={cl.information}>
			{
				paragraphs.map((paragraph, indx) => (
					<p key={`carPageAdditionalInformation-${indx}`}
						className={cl.information__paragraph}
					>
						{paragraph}
					</p>
				))
			}
		</div>
	);
};

export default CarPageAdditionalInformation;