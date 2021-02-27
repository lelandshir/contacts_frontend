import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {

	render = ()=>{
		return <main>
			<h1>Contacts App</h1>
			<section>
				<h2>List of Current Conacts</h2>
				<ul>
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
