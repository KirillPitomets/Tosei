export const checkAndPrepositionChanges = (word: string): string => {
	const vowels: string[] = [
		'а', 'о', 'и', 'е', 'ё',
		'э', 'ы', 'у', 'ю', 'я',
		'Б', 'В', 'Г', 'Д', 'Ж',
		'З', 'Й', 'К', 'Л', 'М',
		'Н', 'П', 'Р', 'С', 'Т',
		'Ф', 'Х', 'Ц', 'Ч', 'Ш','Щ' ]

	const wordArray: string[] = word.split('')

	// Second letter === vowel
	const resultOfCheckingFirstLetter: boolean =
		word[0].toLowerCase() === 'в' || word[0].toLowerCase() === 'ф'
			? true
			: false

	// First letter === 'в' or 'ф'
	const resultOfCheckingOnVowel: boolean = vowels.find(
		letter => letter.toLowerCase() === wordArray[1].toLowerCase()
	)
		? true
		: false

	if (resultOfCheckingFirstLetter && resultOfCheckingOnVowel) {
		return 'вo'
	} else {
		return 'в'
	}
}
