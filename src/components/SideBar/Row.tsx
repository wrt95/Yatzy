import styled from 'styled-components'
import { BASE_BREAKPOINT_MOBILE } from '../../utils/breakpoint'

interface IWrapper {
	hasThickTopBorder: boolean
	isSmall: boolean
}
const Wrapper = styled.div<IWrapper>`
	display: flex;
	align-items: center;
	margin: 0;
	border: 0.5px solid black;
	border-top: ${(props) => props.hasThickTopBorder && '4px solid black'};
	width: 100px;
	height: 20px;
	padding-inline: 5px;
	padding-block: 2.02px;

	@media only screen and (min-width: ${BASE_BREAKPOINT_MOBILE}) {
		width: 130px;
		padding-inline: 10px;
	}
`

interface IText {
	hasBoldText: boolean
	centerText: boolean
}

const Text = styled.p<IText>`
	font-size: 12px;
	font-weight: ${(props) => (props.hasBoldText ? '800' : '400')};
	text-align: ${(props) => props.centerText && 'center'};

	@media only screen and (min-width: ${BASE_BREAKPOINT_MOBILE}) {
		font-size: 16px;
	}
`

interface Props {
	text: string
	hasThickTopBorder?: boolean
	hasBoldText?: boolean
	isSmall?: boolean
	centerText?: boolean
}

export const Row = ({
	text,
	hasThickTopBorder = false,
	hasBoldText = false,
	isSmall = false,
	centerText = false
}: Props) => {
	return (
		<Wrapper hasThickTopBorder={hasThickTopBorder} isSmall={isSmall}>
			<Text hasBoldText={hasBoldText} centerText={centerText}>
				{text}
			</Text>
		</Wrapper>
	)
}
