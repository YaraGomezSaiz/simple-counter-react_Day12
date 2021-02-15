//import react into the bundle
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../../styles/index.scss";

import { Counter } from "./counter.jsx";

export default function BlackCard(props) {
	return (
		<div className="card">
			<div className="card-body pr-5  ">
				<h2> {props.number}</h2>
			</div>
		</div>
	);
}

BlackCard.propTypes = {
	number: PropTypes.number
};
