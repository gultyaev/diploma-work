import React, { Component } from 'react';
import './Main.styl';

import promo from '../../../img/promo.svg'

class Main extends Component {
    render() {
        return (
        	<div className="main">
				<h1>Lorem ipsum dolor sit amet.</h1>

				<img src={promo} className="main--promo" alt=""/>

				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolor et laborum provident quaerat quia ratione suscipit?
					Accusantium alias consequatur dignissimos dolor dolorem eaque eum eveniet ex facere fugiat, iure praesentium, quibusdam quo sequi ullam.
					Aut inventore nulla ratione! Accusantium amet aperiam assumenda at autem dignissimos ea earum eius fugit hic id illo ipsa
					iure magnam omnis possimus quas quia quibusdam quisquam rerum sapiente sed similique sint sit vitae voluptas, voluptatem voluptatibus.
					Accusamus ad architecto commodi consequatur deserunt, doloremque ducimus eius fugiat inventore ipsum, iusto minima neque optio
					praesentium quas qui reiciendis saepe sapiente voluptatem voluptatum. Commodi labore praesentium reprehenderit?
				</p>
			</div>
		);
    };
}

export default Main;