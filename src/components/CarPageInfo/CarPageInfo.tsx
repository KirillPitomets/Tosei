import React, { FC } from 'react';
// ======= Enums ======
import { EnumCarNavbar } from '../../enums/EnumCarNavbar'
// ======= Styles ======
import cl from './CarPageInfo.module.scss'
// ======= Components ======
import CarPageFeature from '../CarPageFeature/CarPageFeature';
import CarPageAdditionalInformation from '../CarPageAdditionalInformation/CarPageAdditionalInformation';
import CarPageVideo from '../CarPageVideo/CarPageVideo'

type Props = {
	activeElement: EnumCarNavbar
}

const CarPageInfo: FC<Props> = ({ activeElement }) => {
	return (
		<div className={cl.content}>
			{
				activeElement === EnumCarNavbar.feature
					?
					<CarPageFeature />
					:
					activeElement === EnumCarNavbar.additionalInformation
					?
					<CarPageAdditionalInformation />
					:
					activeElement === EnumCarNavbar.videoReview
					&&
					<CarPageVideo/>
			}
		</div>
	);
};

export default CarPageInfo;