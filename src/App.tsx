import React from 'react'
import './App.css'
import styled from 'styled-components'
import { Game } from './components/Game'

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding-bottom: 50px;
`

const H1 = styled.h1`
	padding-top: 10px;
`

export const App = () => {
	return (
		<Wrapper className="App">
			{/* TODO - Selector for Yatzy or Maxi Yatzy */}
			{/* TODO - Selector for language */}
			<H1>MAXI YATZY</H1>
			<Game />
		</Wrapper>
	)
}
