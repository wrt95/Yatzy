import styled from 'styled-components'
import { BASE_BREAKPOINT_MOBILE } from '../../utils/breakpoint'

interface IWrapper {
	hasThickTopBorder: boolean
}
const Wrapper = styled.div<IWrapper>`
	margin: 0;
	padding-block: 2px;
	width: 39px;
	height: 20px;
	border: 0.5px solid black;
	display: flex;
	justify-content: center;
	align-items: center;
`

const Input = styled.input`
	text-align: center;
	font-size: 12px;
	width: 35px;
	border: none;

	@media only screen and (min-width: ${BASE_BREAKPOINT_MOBILE}) {
		font-size: 16px;
	}
`

interface Props {
	value: string
	setValue: (s: string) => void
	hasThickTopBorder?: boolean
}

export const InputRow = ({
	value,
	setValue,
	hasThickTopBorder = false
}: Props) => {
	return (
		<Wrapper hasThickTopBorder={hasThickTopBorder}>
			<Input
				value={value === undefined ? '' : value}
				onChange={(e) => setValue(e.target.value)}
			/>
		</Wrapper>
	)
}