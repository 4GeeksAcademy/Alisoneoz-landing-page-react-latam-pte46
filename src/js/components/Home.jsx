import React from "react";
import { Navbar } from './Navbar.jsx';
import { Jumbotron} from './Jumbotron.jsx';
import { Card } from './Card.jsx';


//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<Jumbotron />
			<div className="row justify-content-between">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
};

export default Home;