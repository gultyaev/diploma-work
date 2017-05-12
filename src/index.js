import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Index from './components/Pages/Main';
import About from './components/Pages/About';

import './index.styl';

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Index}/>
			<Route path="о-нас" component={About}/>
		</Route>
	</Router> ,
  document.getElementById('root')
);
