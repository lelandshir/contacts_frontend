import React from 'react';
import axios from 'axios';


class Person extends React.Component {
	deletePerson = ()=>{
		axios
			.delete(
				`https://desolate-thicket-29906.herokuapp.com/api/contacts/${this.props.data.id}`
			).then(()=>{
				this.props.refreshCallback();
			})
	}

	updatePerson = (event)=>{
		event.preventDefault();
		axios
			.put(
				`https://desolate-thicket-29906.herokuapp.com/api/contacts/${this.props.data.id}`,
				{
					name:this.state.name,
					age:this.state.age
				}
			).then(()=>{
				this.props.refreshCallback();
			})
	}

	changeName = (event)=>{
		this.setState({
			name:event.target.value
		})
	}

	changeAge = (event)=>{
		this.setState({
			age:event.target.value
		})
	}

	render = ()=>{
		return <li key={this.props.data.id}>
			{this.props.data.name} is {this.props.data.age} years old
			<button onClick={this.deletePerson}>Delete</button>
			<form onSubmit={this.updatePerson}>
				<input type="text" onKeyUp={this.changeName} />
				<input type="number" onKeyUp={this.changeAge} />
				<input type="submit" value="Update"/>
			</form>
		</li>
	}
}

export default Person
