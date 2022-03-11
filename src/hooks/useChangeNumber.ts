import { useState } from 'react';


export default function useChangeNumber(initialBoolean: number | null) {

	const [value, setValue] = useState<number | null>(initialBoolean)

	const handlerValue = (num: number) => {
		setValue(num)	
	}

	return {value, handlerValue}

}