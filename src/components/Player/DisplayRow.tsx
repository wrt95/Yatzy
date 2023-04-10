import styled from 'styled-components'
import { BASE_BREAKPOINT_MOBILE } from '../../utils/breakpoint'

interface IWrapper {
	hasThickTopBorder: boolean
}
const Wrapper = styled.div<IWrapper>`
	display: flex;
	justify-content: center;
	align-items: center;
	border: 0.5px solid black;
	width: 39px;
	height: 20.2px;
	border-top: ${(props) => props.hasThickTopBorder && '4px solid black'};
	padding-block: 2px;
`

const Text = styled.p`
	font-size: 12px;
	text-align: center;

	@media only screen and (min-width: ${BASE_BREAKPOINT_MOBILE}) {
		font-size: 16px;
	}
`

interface Props {
	text: string
	hasThickTopBorder: boolean
}

export const DisplayRow = ({ text, hasThickTopBorder }: Props) => {
	return (
		<Wrapper hasThickTopBorder={hasThickTopBorder}>
			<Text>{text}</Text>
		</Wrapper>
	)
}
