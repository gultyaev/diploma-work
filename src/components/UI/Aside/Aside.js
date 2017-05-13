import React from "react";
import "./Aside.styl";
import { Card } from "../../UI";

const Aside = () => {
    return (
        <div className="aside-right">
			<Card>
				<h3>Семки с 50% скидкой</h3>
				<p>Налетай! Только сегодня!</p>
			</Card>
		</div>
    );
};

export default Aside;