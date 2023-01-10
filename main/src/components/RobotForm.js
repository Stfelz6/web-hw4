import React, { Component, useState, useEffect } from 'react'
import Robot from './Robot';
import RobotStore from '../stores/RobotStore';
import RobotList from './RobotList'

// import { Container } from './styles';

class RobotForm extends Component {
	constructor(){
		super();
		this.state = {
			robots : []
		}
	}
	componentDidMount(){
		this.store = new RobotStore()
		console.log("this.state.robots: " + this.state.robots);
		this.setState({
			robots : this.store.getRobots()
		})
		this.store.emitter.addListener('UPDATE', () => {
			this.setState({
				robots : this.store.getRobots()
			})			
		})
	}
    onAdd(){
        let name = document.getElementById("name");
        let type = document.getElementById("type");
        let mass = document.getElementById("mass");
        let JSONr = {
			id : 3,
			type : type.value,
			name : name.value,
			mass : mass.value
		};
        //let r = new Robot(name.value, type.value, mass.value);
        console.log(JSONr);
        this.state.robots.push(JSONr);
        console.log(this.state.robots);
        this.forceUpdate();
    }

	render() {
        return (<>
         <label>
           Name:
           <input id="name" type="text" name="name" />
         </label>
         <label>
           Type:
           <input id="type" type="text" name="type" />
         </label>
         <label>
           Mass:
           <input id="mass"  type="text" name="mass" />
         </label>
         <button variant="text" onClick={()=>this.onAdd()}>ADD</button>
         
         <div>
          	A list of robots
          	<RobotList robots={this.state.robots} />
          </div>
         </>)
    }


}

export default RobotForm;