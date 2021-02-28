import React from 'react';
import axios from 'axios';


class Person extends React.Component {
	render = ()=>{
		return <li key={this.props.data.id}>
			{this.props.data.name} is {this.props.data.age} years old
			<button>Delete</button>
		</li>
	}
}

export default Person
