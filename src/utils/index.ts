export const getDeclension = (count: number, variants: [string, string, string]) => {
	if (count % 10 === 1 && count !== 11) {
		return variants[0]
	}
	if (Math.floor(count / 10) === 1) {
		return variants[2]
	}
	const lastNumber = count % 10
	if (lastNumber < 5 && lastNumber !== 0) {
		return variants[1]
	}
	return variants[2]
}