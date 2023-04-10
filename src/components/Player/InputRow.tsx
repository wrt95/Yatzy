import styled from 'styled-components'

interface IInput {
	hasThickTopBorder: boolean
}
const Input = styled.input<IInput>`
	margin: 0;
	padding-block: 2px;
	width: 40px;
	height: 20px;
	text-align: center;
	border: 1px solid black;
	border-top: ${(props) => props.hasThickTopBorder && '4px solid black'};
	font-size: 16px;
`

interface Props {
	value: string
	setValue: (s: string) => void
	hasThickTopBorder?: boolean
	// type: 'number' | 'string'
}

export const InputRow = ({
	value,
	setValue,
	hasThickTopBorder = false,
	...rest
}: Props) => {
	return (
		<Input
			value={value === undefined ? '' : value}
			onChange={(e) =>
				// type === 'number'
				//? setValue(Number(e.target.value))
				setValue(e.target.value)
			}
			hasThickTopBorder={hasThickTopBorder}
			{...rest}
		/>
		/*<RowWrapper hasThickTopBorder={hasThickTopBorder} isInput>*/
		/*</RowWrapper>*/
	)
}
