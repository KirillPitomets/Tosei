import React from 'react'
// ======= Components ======
import MostPopularCars from '../components/MostPopularCars/MostPopularCars'
import HomeBanner from '../components/HomeBanner/HomeBanner'
import OurAdvantages from '../components/OurAdvantages/OurAdvantages'
import Reviews from '../components/Reviews/Reviews'
import VideoModalProvider from '../context/VideoModalProvider'
import VideoModal from '../components/UI/VideoModal/VideoModal'
import HowToBuy from '../components/HowToBuy/HowToBuy'
import SectionContacts from '../components/SectionContacts/SectionContacts'
import PhoneNumberForm from '../components/PhoneNumberForm/PhoneNumberForm'
import FormWrapperForMap from '../components/UI/FormWrapperForMap/FormWrapperForMap'

const Home = () => {
	return (
		<div className='container'>
			<HomeBanner />
			<MostPopularCars />
			<OurAdvantages />

			<VideoModalProvider>
				<VideoModal />
				<Reviews />
			</VideoModalProvider>

			<HowToBuy />

			<SectionContacts
				title='Как с нами связаться?'
				formOnMap={
					<FormWrapperForMap>
						<PhoneNumberForm title='Обратная связь' />
					</FormWrapperForMap>
				}
			/>

		</div>
	)
}

export default Home
