import { useState } from 'react';


export default function useChangeBoolean(initialBoolean: boolean) {

	const [boolean, setBoolean] = useState(initialBoolean)

	const onChange = () => {
		setBoolean( prev => !prev)
	}

	return {boolean, onChange}

}