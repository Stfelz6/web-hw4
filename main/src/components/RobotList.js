import React, { Component } from 'react'
import RobotStore from '../stores/RobotStore'
import Robot from './Robot'
import RobotForm from './RobotForm'



class RobotList extends Component {
	constructor(props){
		super(props)
		this.state = {
			robots: props.robots
		}
		console.log(props.robots);
	}


	render() {
		return (
			<div>
				 
				{
					
					this.props.robots.map((e, i) => 
						<Robot item={e} key={i} />
					)
				}
			</div>
		)
	}
}

export default RobotList
