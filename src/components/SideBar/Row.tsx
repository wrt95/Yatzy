import styled from 'styled-components'
import { RowWrapper } from '../RowWrapper/RowWrapper'
import { BASE_BREAKPOINT_MOBILE } from '../../utils/breakpoint'

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
	hasThickRightBorder?: boolean
	hasBoldText?: boolean
	isSmall?: boolean
	centerText?: boolean
}

export const Row = ({
	text,
	hasThickTopBorder = false,
	hasBoldText = false,
	hasThickRightBorder = true,
	isSmall = false,
	centerText = false
}: Props) => {
	return (
		<RowWrapper
			hasThickTopBorder={hasThickTopBorder}
			hasThickRightBorder={hasThickRightBorder}
			isSmall={isSmall}
		>
			<Text hasBoldText={hasBoldText} centerText={centerText}>
				{text}
			</Text>
		</RowWrapper>
	)
}
