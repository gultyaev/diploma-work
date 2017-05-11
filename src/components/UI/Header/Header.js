import React, { Component } from 'react';
import './Header.styl';
import logo from '../../../img/logo.svg';

class Header extends Component {
    render() {
        return (
        	<header className="header">
				<img className="header-logo" alt="" src={logo}/>

				<p className="header--text">
					Только у нас чёткие депозиты
				</p>
			</header>
		);
    };
}

export default Header;