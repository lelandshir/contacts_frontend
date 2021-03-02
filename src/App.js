import "./App.css";
import React from "react";
import axios from "axios";
import Contact from "./components/contact.js";

class App extends React.Component {
	state = {
		contacts: [],
	};

	getContacts = () => {
		axios
			.get("https://djangoscontacts.herokuapp.com/api/contacts")
			.then((response) => {
				this.setState({
					contacts: response.data,
				});
			});
	};

	componentDidMount = () => {
		this.getContacts();
	};

	createContact = (event) => {
		event.preventDefault();
		axios
			.post("https://djangoscontacts.herokuapp.com/api/contacts", {
				name: this.state.newContactName,
				age: this.state.newContactAge,
			})
			.then(() => {
				this.getContacts();
			});
	};

	changeNewContactName = (event) => {
		this.setState({
			newContactName: event.target.value,
		});
	};

	changeNewContactAge = (event) => {
		this.setState({
			newContactAge: event.target.value,
		});
	};

	render = () => {
		return (
			<main>
				<h1>Contacts App</h1>
				<section>
					<h2>List of Current Conacts</h2>
					<ul>
						{this.state.contacts.map((contact) => {
							return (
								<Contact refreshCallback={this.getContacts} data={contact} />
							);
						})}
					</ul>
				</section>
				<section>
					<h2>Create a new Contact</h2>
					<form onSubmit={this.createContact}>
						Name: <input type="text" onKeyUp={this.changeNewContactName} />
						<br />
						Age: <input type="number" onKeyUp={this.changeNewContactAge} />
						<br />
						<input type="submit" value="Create Contact" />
					</form>
				</section>
			</main>
		);
	};
}

export default App;
