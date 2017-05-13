import React, { Component } from 'react';
import { Link } from 'react-router';

import './Header.styl';
import logo from '../../../img/logo.svg';

class Header extends Component {
    render() {
        return (
        	<header className="header">
				<Link to="/">
					<img className="header-logo" alt="" src={logo}/>
				</Link>

				<p className="header--text">
					Только у нас чёткие депозиты
				</p>
			</header>
		);
    };
}

export default Header;