import React from 'react';
import './AsideNav.styl';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router';

const AsideNav = () => {
    return (
    	<aside className="aside">
			<div className="aside--list-groups">
				<input type="checkbox" aria-hidden="true" id="for-private"/>
				<label htmlFor="for-private" aria-hidden="true" className="aside-nav--item">Услуги для приватных лиц</label>
				<ul>
					<li><a href="#">Как стать клиентом нашего банка</a></li>
					<li><a href="#">Действующие акции</a></li>
					<li><a href="#">Долгосрочные программы</a></li>
					<li><a href="#">Депозиты</a></li>
					<li><a href="#">Кредиты</a></li>
				</ul>

				<input type="checkbox" aria-hidden="true" id="for-business"/>
				<label htmlFor="for-business" aria-hidden="true" className="aside-nav--item">Услуги малому бизнесу</label>
				<ul>
					<li><a href="#">Услуга 1</a></li>
					<li><a href="#">Услуга 2</a></li>
					<li><a href="#">Услуга 3</a></li>
					<li><a href="#">Услуга 4</a></li>
					<li><a href="#">Услуга 5</a></li>
				</ul>
			</div>

			<div className="aside--item">
				<Link to="о-нас">О банке</Link>
			</div>
			<div className="aside--item">
				<Link to="вакансии">Вакансии</Link>
			</div>

		</aside>
	);
};

export default AsideNav;