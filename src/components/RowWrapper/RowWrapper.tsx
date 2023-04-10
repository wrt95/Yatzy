import { ReactNode } from 'react'
import styled from 'styled-components'

interface IWrapper {
	hasThickTopBorder: boolean
	hasThickRightBorder: boolean
	isSmall: boolean
}
const Wrapper = styled.div<IWrapper>`
	border: 1px solid black;
	border-right: ${(props) => props.hasThickRightBorder && '4px solid black'};
	border-top: ${(props) => props.hasThickTopBorder && '4px solid black'};
	width: ${(props) => (props.isSmall ? '24px' : '130px')};
	height: 20px;
	padding-inline: 10px;
	padding-block: 2px;
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
