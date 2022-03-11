export default function useFormatPhoneNumber() {

	return function (num: number) {
		const phoneNumberStr: string = num.toString()
		let maskPhoneNumber: string
		
		const countryCode = phoneNumberStr[0]

		const firstPartPhoneNumber = phoneNumberStr.substring(1, 4) 
		const secondPartPhoneNumber = phoneNumberStr.substring(4, 7) 
		const thirdPartPhoneNumber = phoneNumberStr.substring(7, 9) 
		const fourthPartPhoneNumber = phoneNumberStr.substring(9, phoneNumberStr.length)

		maskPhoneNumber = `+${countryCode} (${firstPartPhoneNumber}) ${secondPartPhoneNumber}-${thirdPartPhoneNumber}-${fourthPartPhoneNumber}`

		return maskPhoneNumber
	}
}
