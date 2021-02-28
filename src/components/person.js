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
	render = ()=>{
		return <li key={this.props.data.id}>
			{this.props.data.name} is {this.props.data.age} years old
			<button onClick={this.deletePerson}>Delete</button>
		</li>
	}
}

export default Person
