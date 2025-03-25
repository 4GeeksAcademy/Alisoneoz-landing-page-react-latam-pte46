import React from "react";
import { Navbar } from './Navbar.jsx';
import { Jumbotron} from './Jumbotron.jsx';
import { Card } from './Card.jsx';


//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<div className="container">
				<Jumbotron />
				<div className="row justify-content-between g-4  px-0 ">
					<Card className="bg-dark"/>
					<Card />
					<Card />
					<Card />
				</div></div>
		</div>
	);
};

export default Home;