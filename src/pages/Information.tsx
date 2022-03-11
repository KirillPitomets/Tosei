import React from 'react'
// ======= Route ======
import { useParams } from 'react-router-dom';
// ======= Components ======
import Title from '../components/UI/Title/Title';

const InformationPage = () => {
	
	const params = useParams()
	
	return (
		<div className='container'>
			
			<Title>Информация</Title>
			
			<p style={{marginTop: '.5rem'}}>  { params.id} </p>

			<p style={{marginTop: '2rem'}}>Нету дизайна :( </p>

		</div>
	);
};

export default InformationPage;