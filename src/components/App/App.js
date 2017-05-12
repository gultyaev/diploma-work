import React, { Component } from 'react';

//UI
import { Header, Footer, AsideNav } from '../UI'

class App extends Component {
  render() {
    return (
		<div>
			<Header/>
			<div className="row">
				<AsideNav/>
				<main>
					{this.props.children}
				</main>
			</div>
			<Footer/>
		</div>
    );
  }
}

export default App;
