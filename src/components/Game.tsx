import { SideBar } from './SideBar/SideBar'
import styled from 'styled-components'
import { Player } from './Player/Player'

const Wrapper = styled.div`
	display: flex;
	width: 523px;
	border: 2px solid black;
`

export const Game = () => {
	const displayComponents = Array.from({ length: 8 }, (_, index) => (
		<Player key={index} />
	))
	return (
		<Wrapper>
			<SideBar />
			{displayComponents}
		</Wrapper>
	)
}
