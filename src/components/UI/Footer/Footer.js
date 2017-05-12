import React from 'react';
import './Footer.styl';
import { Link } from 'react-router';

const Footer = () => {
    return (
    	<footer className="footer">
			<div className="row">
				<div className="footer--col1">
					<ul className="footer--links">
						<li><Link activeClassName="active" className="footer--link-item" to="/">Главная</Link></li>
						<li><Link activeClassName="active" className="footer--link-item" to="о-нас">О нас</Link></li>
						<li><Link activeClassName="active" className="footer--link-item" to="заказать-чёткий-депозит">Заказать чёткий депозит</Link></li>
						<li><Link activeClassName="active" className="footer--link-item" to="инфа">Почитать инфу</Link></li>
						<li><Link activeClassName="active" className="footer--link-item" to="кредит">Стрельнуть купонов</Link></li>
					</ul>
				</div>
				<div className="footer--col2">
					&copy; 2017 By me
				</div>
			</div>
		</footer>
	);
};

export default Footer;