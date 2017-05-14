import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Index from './components/Pages/Main';
import About from './components/Pages/About';
import Error404 from './components/Pages/Error404';

import './index.styl';

ReactDOM.render(
	<Router onUpdate={() => window.scrollTo(0,0)} history={browserHistory}>
		<Route path="/diploma-work" component={App}>
			<IndexRoute component={Index}/>
			<Route path="о-нас" component={About}/>
			<Route path="*" component={Error404}/>
		</Route>
	</Router> ,
  document.getElementById('root')
);
