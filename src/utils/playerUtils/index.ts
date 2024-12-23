import { PlayerStats } from '../../types/PlayerStats'

const NUMBER_TO_GET_BONUS: number = 84
const POINTS_FOR_BONUS: number = 100

export const initialPlayer: PlayerStats = {
	name: '',
	one: '',
	two: '',
	three: '',
	four: '',
	five: '',
	six: '',
	sum: '',
	bonus: '',
	onePair: '',
	twoPairs: '',
	threePairs: '',
	threeOfAKind: '',
	fourOfAKind: '',
	fiveOfAKind: '',
	smallStraight: '',
	bigStraight: '',
	fullStraight: '',
	cabin: '',
	house: '',
	tower: '',
	chance: '',
	maxiYatzy: '',
	totalScore: ''
}

export const calculateSum = (player: PlayerStats) => {
	const sum =
		Number(player.one) +
		Number(player.two) +
		Number(player.three) +
		Number(player.four) +
		Number(player.five) +
		Number(player.six)

	return sum
}

export const calculateBonus = (sum: number) => {
	return !isNaN(sum) && sum >= NUMBER_TO_GET_BONUS ? POINTS_FOR_BONUS : 0
}

export const calculateTotalSum = (
	player: PlayerStats,
	sum: number,
	bonus: number
) => {
	const totalSum =
		sum +
		bonus +
		Number(player.onePair) +
		Number(player.twoPairs) +
		Number(player.threePairs) +
		Number(player.threeOfAKind) +
		Number(player.fourOfAKind) +
		Number(player.fiveOfAKind) +
		Number(player.smallStraight) +
		Number(player.bigStraight) +
		Number(player.fullStraight) +
		Number(player.cabin) +
		Number(player.house) +
		Number(player.tower) +
		Number(player.chance) +
		Number(player.maxiYatzy)

	return totalSum
}

export const getPlayerSumString = (sum: string) => {
	const sumIsNumber: boolean = isNumber(sum)
	if (sumIsNumber) {
		return sum.toString()
	}
	return '0'
}

const isNumber = (value: string): boolean => {
	return !isNaN(Number(value))
}

export const getPlayerBonusString = (sum: string) => {
	const sumIsNumber: boolean = isNumber(sum)
	const sumIsValidForBonus: boolean = isSumValidForBonus(Number(sum))

	if (sumIsNumber && sumIsValidForBonus) {
		return POINTS_FOR_BONUS.toString()
	}
	return '0'
}

const isSumValidForBonus = (sum: number): boolean => {
	return sum >= NUMBER_TO_GET_BONUS
}
