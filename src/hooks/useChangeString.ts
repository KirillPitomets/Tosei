import { useState } from 'react';


export default function useChangeString(initialBoolean: string | null) {

	const [value, setValue] = useState<string | null>(initialBoolean)

	const handlerValue = (value: string) => {
		setValue(value)	
	}

	return {value, handlerValue}

}