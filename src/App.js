import './App.css';
import React from 'react';
import axios from 'axios';

class App extends React.Component {

	state = {
		contacts: []
	}

	componentDidMount = ()=>{
		axios
			.get('https://desolate-thicket-29906.herokuapp.com/api/contacts')
			.then((response)=>{
				this.setState({
					contacts:response.data
				})
			})
	}

	createUser = (event)=>{
		event.preventDefault();
		axios
			.post(
				'https://desolate-thicket-29906.herokuapp.com/api/contacts',
				{
					name:this.state.newPersonName,
					age:this.state.newPersonAge
				}
			).then(()=>{
				axios
					.get('https://desolate-thicket-29906.herokuapp.com/api/contacts')
					.then((response)=>{
						this.setState({
							contacts:response.data
						})
					})
			})
	}

	changeNewPersonName = (event)=>{
		this.setState({
			newPersonName: event.target.value
		})
	}

	changeNewPersonAge = (event)=>{
		this.setState({
			newPersonAge: event.target.value
		})

	}

	render = ()=>{
		return <main>
			<h1>Contacts App</h1>
			<section>
				<h2>List of Current Conacts</h2>
				<ul>
					{
						this.state.contacts.map((contact)=>{
							return <li key={contact.id}>{contact.name} is {contact.age} years old</li>
						})
					}
				</ul>
			</section>
			<section>
				<h2>Create a new Contact</h2>
				<form onSubmit={this.createUser}>
					Name: <input type="text" onKeyUp={this.changeNewPersonName} /><br/>
					Age: <input type="number" onKeyUp={this.changeNewPersonAge} /><br/>
					<input type="submit" value="Create Contact" />
				</form>
			</section>
		</main>
	}

}

export default App;
