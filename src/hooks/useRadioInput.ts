import { useState, ChangeEvent } from 'react';

export default function useChangeBoolean(initialString: string) {

	const [value, setValue] = useState<string>(initialString)

	const handlerRadioInput = (evnt: ChangeEvent<HTMLInputElement>) => {
		setValue(evnt.target.value)
	}

	return {value, handlerRadioInput}

}