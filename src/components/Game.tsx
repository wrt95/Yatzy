import { SideBar } from './SideBar/SideBar'
import styled from 'styled-components'
import { Player } from './Player/Player'
import { BASE_BREAKPOINT_MOBILE } from '../utils/breakpoint'

const Wrapper = styled.div`
	display: flex;
	width: 331px;
	border: 2px solid black;

	@media only screen and (min-width: ${BASE_BREAKPOINT_MOBILE}) {
		width: 431px;
	}
`

export const Game = () => {
	const displayComponents = Array.from({ length: 6 }, (_, index) => (
		<Player key={index} />
	))
	return (
		<Wrapper>
			<SideBar />
			{displayComponents}
		</Wrapper>
	)
}
