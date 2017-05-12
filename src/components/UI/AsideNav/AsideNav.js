import React from 'react';
import './AsideNav.styl';
// import { Link, HashRouter as Router } from 'react-router-dom';

const AsideNav = () => {
    return (
    	<aside className="aside">
			<input type="checkbox" id="for-private"/>
			<label htmlFor="for-private" className="aside-nav--item">Услуги для приватных лиц</label>
			<ul>
				<li><a href="#">Link</a></li>
				<li><a href="#">Link</a></li>
				<li><a href="#">Link</a></li>
				<li><a href="#">Link</a></li>
				<li><a href="#">Link</a></li>
			</ul>


		</aside>
	);
};

export default AsideNav;