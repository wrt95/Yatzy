import { ReactNode } from 'react'
import styled from 'styled-components'
import { BASE_BREAKPOINT_MOBILE } from '../../utils/breakpoint'

interface IWrapper {
	hasThickTopBorder: boolean
	hasThickRightBorder: boolean
	isSmall: boolean
}
const Wrapper = styled.div<IWrapper>`
	border: 1px solid black;
	border-right: ${(props) => props.hasThickRightBorder && '4px solid black'};
	border-top: ${(props) => props.hasThickTopBorder && '4px solid black'};
	width: ${(props) => (props.isSmall ? '24px' : '100px')};
	height: 20px;
	padding-inline: 5px;
	padding-block: 2px;

	@media only screen and (min-width: ${BASE_BREAKPOINT_MOBILE}) {
		width: ${(props) => (props.isSmall ? '24px' : '130px')};
		padding-inline: 10px;
	}
`

interface Props {
	children: ReactNode
	hasThickTopBorder: boolean
	hasThickRightBorder?: boolean
	isSmall: boolean
}

export const RowWrapper = ({
	children,
	hasThickTopBorder,
	hasThickRightBorder = false,
	isSmall
}: Props) => {
	return (
		<Wrapper
			hasThickTopBorder={hasThickTopBorder}
			hasThickRightBorder={hasThickRightBorder}
			isSmall={isSmall}
		>
			{children}
		</Wrapper>
	)
}
