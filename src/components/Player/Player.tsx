import { useState } from 'react'
import { InputRow } from './InputRow'
import { DisplayRow } from './DisplayRow'
import styled from 'styled-components'
import { PlayerStats } from '../../types/PlayerStats'
import {
	calculateBonus,
	calculateSum,
	calculateTotalSum,
	getPlayerBonusString,
	getPlayerSumString,
	initialPlayer
} from '../../utils/playerUtils'

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

type PlayerProps = {
	showTotalScore: boolean
}

export const Player = ({ showTotalScore }: PlayerProps) => {
	const [player, setPlayer] = useState<PlayerStats>(initialPlayer)

	const handleInputChange = (field: keyof PlayerStats, value: string) => {
		setPlayer((prevPlayer) => {
			const updatedPlayer = { ...prevPlayer, [field]: value }

			const sum = calculateSum(updatedPlayer)
			const bonus = calculateBonus(sum)
			const totalSum = calculateTotalSum(updatedPlayer, sum, bonus)

			return {
				...updatedPlayer,
				sum: sum.toString(),
				bonus: bonus.toString(),
				totalScore: totalSum.toString()
			}
		})
	}

	return (
		<Wrapper>
			<InputRow
				value={player.name}
				setValue={(name: string) => handleInputChange('name', name)}
			/>
			<InputRow
				value={player.one}
				setValue={(one: string) => handleInputChange('one', one)}
			/>
			<InputRow
				value={player.two}
				setValue={(two: string) => handleInputChange('two', two)}
			/>
			<InputRow
				value={player.three}
				setValue={(three: string) => handleInputChange('three', three)}
			/>
			<InputRow
				value={player.four}
				setValue={(four: string) => handleInputChange('four', four)}
			/>
			<InputRow
				value={player.five}
				setValue={(five: string) => handleInputChange('five', five)}
			/>
			<InputRow
				value={player.six}
				setValue={(six: string) => handleInputChange('six', six)}
			/>
			<DisplayRow text={getPlayerSumString(player.sum)} hasThickTopBorder />
			<DisplayRow
				text={getPlayerBonusString(player.sum)}
				hasThickTopBorder={false}
			/>
			<InputRow
				value={player.onePair}
				setValue={(onePair: string) =>
					handleInputChange('onePair', onePair)
				}
			/>
			<InputRow
				value={player.twoPairs}
				setValue={(twoPairs: string) =>
					handleInputChange('twoPairs', twoPairs)
				}
			/>
			<InputRow
				value={player.threePairs}
				setValue={(threePairs: string) =>
					handleInputChange('threePairs', threePairs)
				}
			/>
			<InputRow
				value={player.threeOfAKind}
				setValue={(threeOfAKind: string) =>
					handleInputChange('threeOfAKind', threeOfAKind)
				}
			/>
			<InputRow
				value={player.fourOfAKind}
				setValue={(fourOfAKind: string) =>
					handleInputChange('fourOfAKind', fourOfAKind)
				}
			/>
			<InputRow
				value={player.fiveOfAKind}
				setValue={(fiveOfAKind: string) =>
					handleInputChange('fiveOfAKind', fiveOfAKind)
				}
			/>
			<InputRow
				value={player.smallStraight}
				setValue={(smallStraight: string) =>
					handleInputChange('smallStraight', smallStraight)
				}
			/>
			<InputRow
				value={player.bigStraight}
				setValue={(bigStraight: string) =>
					handleInputChange('bigStraight', bigStraight)
				}
			/>
			<InputRow
				value={player.fullStraight}
				setValue={(fullStraight: string) =>
					handleInputChange('fullStraight', fullStraight)
				}
			/>
			<InputRow
				value={player.cabin}
				setValue={(cabin: string) => handleInputChange('cabin', cabin)}
			/>
			<InputRow
				value={player.house}
				setValue={(house: string) => handleInputChange('house', house)}
			/>
			<InputRow
				value={player.tower}
				setValue={(tower: string) => handleInputChange('tower', tower)}
			/>
			<InputRow
				value={player.chance}
				setValue={(chance: string) => handleInputChange('chance', chance)}
			/>
			<InputRow
				value={player.maxiYatzy}
				setValue={(maxiYatzy: string) =>
					handleInputChange('maxiYatzy', maxiYatzy)
				}
			/>
			{showTotalScore && (
				<DisplayRow
					text={getPlayerSumString(player.totalScore)}
					hasThickTopBorder
				/>
			)}
		</Wrapper>
	)
}
