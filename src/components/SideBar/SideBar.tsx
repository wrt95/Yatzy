import { Row } from './Row'
import styled from 'styled-components'

const Wrapper = styled.div`
	border-right: 4px solid black;
`

export const SideBar = () => {
	return (
		<Wrapper>
			<Row text="" />
			<Row text="Enere" />
			<Row text="Toere" />
			<Row text="Treere" />
			<Row text="Firere" />
			<Row text="Femmere" />
			<Row text="Seksere" />
			<Row text="Sum" hasThickTopBorder />
			<Row text="Bonus" />
			<Row text="1 par" />
			<Row text="2 par" />
			<Row text="3 par" />
			<Row text="3 like" />
			<Row text="4 like" />
			<Row text="5 like" />
			<Row text="Liten straight" />
			<Row text="Stor straight" />
			<Row text="Full straight" />
			<Row text="Hytte (2 + 3 like)" />
			<Row text="Hus (3 + 3 like)" />
			<Row text="Tårn (2 + 4 like)" />
			<Row text="Sjanse" />
			<Row text="Maxiyatzy" hasBoldText />
			<Row text="Totalsum" hasThickTopBorder />
		</Wrapper>
	)
}
