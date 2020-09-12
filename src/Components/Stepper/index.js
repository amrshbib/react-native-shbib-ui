import React,{ useState } from 'react'
import props from './props'
import styles from '../Swiper/styles'
import { View } from 'react-native'
const Stepper=({
	steps,
	containerStyle
}) => {
	const [activeStep,setActiveStep]=useState(0)

	changeStep=(step) => {
		const toStep=activeStep+step
		const totalSteps=steps.length
		if (toStep<totalSteps&&toStep>=0)
			setActiveStep(toStep)
		else
			console.warn('Forbidden')
	}
	const ActiveComponent=steps[activeStep]
	return (
		<View style={styles.root(containerStyle)}>
			{
				!!ActiveComponent&&
				<ActiveComponent
					next={() => changeStep(1)}
					back={() => changeStep(-1)}
				/>
			}
		</View>
	)
}
export default Stepper;

props(Stepper)