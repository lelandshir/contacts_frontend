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
			}
		)
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
				<form>
					Name: <input type="text"/><br/>
					Age: <input type="number"/><br/>
					<input type="submit" value="Create Contact" />
				</form>
			</section>
		</main>
	}

}

export default App;
