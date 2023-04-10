import { useState } from 'react'
import { InputRow } from './InputRow'
import { DisplayRow } from './DisplayRow'
import styled from 'styled-components'

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const Player = () => {
	const [name, setName] = useState('')
	const [one, setOne] = useState('')
	const [two, setTwo] = useState('')
	const [three, setThree] = useState('')
	const [four, setFour] = useState('')
	const [five, setFive] = useState('')
	const [six, setSix] = useState('')

	const sum =
		Number(one) +
		Number(two) +
		Number(three) +
		Number(four) +
		Number(five) +
		Number(six)

	const [onePair, setOnePair] = useState('')
	const [twoPairs, setTwoPairs] = useState('')
	const [threePairs, setThreePairs] = useState('')
	const [threeOfaKind, setThreeOfaKind] = useState('')
	const [fourOfAKind, setFourOfaKind] = useState('')
	const [fiveOfaKind, setFiveOfAKind] = useState('')
	const [smallStraight, setSmallStraight] = useState('')
	const [bigStraight, setBigStraight] = useState('')
	const [fullStraight, setFullStraight] = useState('')
	const [cabin, setCabin] = useState('')
	const [house, setHouse] = useState('')
	const [tower, setTower] = useState('')
	const [chance, setChance] = useState('')
	const [maxiYatzy, setMaxiYatzy] = useState('')

	const totalSum =
		(isNaN(sum) ? 0 : sum) +
		Number(onePair) +
		Number(twoPairs) +
		Number(threePairs) +
		Number(threeOfaKind) +
		Number(fourOfAKind) +
		Number(fiveOfaKind) +
		Number(smallStraight) +
		Number(bigStraight) +
		Number(fullStraight) +
		Number(cabin) +
		Number(house) +
		Number(tower) +
		Number(chance) +
		Number(maxiYatzy)

	return (
		<Wrapper>
			<InputRow value={name} setValue={(v) => setName(v)} />
			<InputRow value={one} setValue={(v) => setOne(v)} />
			<InputRow value={two} setValue={(v) => setTwo(v)} />
			<InputRow value={three} setValue={(v) => setThree(v)} />
			<InputRow value={four} setValue={(v) => setFour(v)} />
			<InputRow value={five} setValue={(v) => setFive(v)} />
			<InputRow value={six} setValue={(v) => setSix(v)} />
			<DisplayRow
				text={!isNaN(sum) ? sum.toString() : '0'}
				hasThickTopBorder
			/>
			<DisplayRow
				text={!isNaN(sum) && sum > 83 ? '100' : '0'}
				hasThickTopBorder={false}
			/>
			<InputRow value={onePair} setValue={(v) => setOnePair(v)} />
			<InputRow value={twoPairs} setValue={(v) => setTwoPairs(v)} />
			<InputRow value={threePairs} setValue={(v) => setThreePairs(v)} />
			<InputRow value={threeOfaKind} setValue={(v) => setThreeOfaKind(v)} />
			<InputRow value={fourOfAKind} setValue={(v) => setFourOfaKind(v)} />
			<InputRow value={fiveOfaKind} setValue={(v) => setFiveOfAKind(v)} />
			<InputRow
				value={smallStraight}
				setValue={(v) => setSmallStraight(v)}
			/>
			<InputRow value={bigStraight} setValue={(v) => setBigStraight(v)} />
			<InputRow value={fullStraight} setValue={(v) => setFullStraight(v)} />
			<InputRow value={cabin} setValue={(v) => setCabin(v)} />
			<InputRow value={house} setValue={(v) => setHouse(v)} />
			<InputRow value={tower} setValue={(v) => setTower(v)} />
			<InputRow value={chance} setValue={(v) => setChance(v)} />
			<InputRow value={maxiYatzy} setValue={(v) => setMaxiYatzy(v)} />
			<DisplayRow
				text={!isNaN(totalSum) ? totalSum.toString() : '0'}
				hasThickTopBorder
			/>
		</Wrapper>
	)
}
