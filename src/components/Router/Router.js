import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Index from "../Pages/Main";

const Routing = () => (
	<Router>
		<div>
			<Route exact path="/" component={Index}/>
		</div>
	</Router>
);

export default Routing;