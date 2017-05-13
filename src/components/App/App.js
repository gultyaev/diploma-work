import React, { Component } from 'react';

//UI
import { Header, Footer, AsideNav, Aside } from '../UI'

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
				<Aside/>
			</div>
			<Footer/>
		</div>
    );
  }
}

export default App;
