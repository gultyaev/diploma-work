import React, { Component } from 'react';

import Router from '../Router';

//UI
import { Header } from '../UI'

class App extends Component {
  render() {
    return (
		<div>
			<Header/>
			<hr/>
			<Router/>
		</div>
    );
  }
}

export default App;
