import { SideBar } from './SideBar/SideBar'
import classes from './Game.module.css'
import { Player } from './Player/Player'
import { useState } from 'react'
import { Button } from './Button'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

export const Game = () => {
	const [showTotalScore, setShowTotalScore] = useState<boolean>(false)

	const handleClickShowTotalScore = () => {
		setShowTotalScore((prevShowTotalScore) => !prevShowTotalScore)
	}

	const displayComponents = Array.from({ length: 6 }, (_, index) => (
		<Player key={index} showTotalScore={showTotalScore} />
	))
	return (
		<div className={classes.wrapper}>
			<div className={classes.gameWrapper}>
				<SideBar showTotalScore={showTotalScore} />
				{displayComponents}
			</div>
			<ToggleTotalScoreButton
				showTotalScore={showTotalScore}
				onClick={handleClickShowTotalScore}
			/>
		</div>
	)
}

type ToggleTotalScoreButtonProps = {
	showTotalScore: boolean
	onClick: () => void
}
const ToggleTotalScoreButton = ({
	showTotalScore,
	onClick
}: ToggleTotalScoreButtonProps) => {
	return (
		<Button
			onClick={onClick}
			icon={showTotalScore ? <FaEye /> : <FaEyeSlash />}
			aria-label={showTotalScore ? 'Hide total score' : 'Show total score'}
			className={classes.toggleTotalScoreButton}
		>
			{showTotalScore ? 'Hide total score' : 'Show total score'}
		</Button>
	)
}
