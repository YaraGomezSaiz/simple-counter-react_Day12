//import react into the bundle
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import { Counter } from "./counter.jsx";

export default function Interval(props) {
	const [seccounter, setSecCounter] = useState(0);
	const [startcounter, setStartCounter] = useState(true);
	const [button, setButton] = useState("Start");
	const [alert, setAlert] = useState(0);
	const [secalert, setSecAlert] = useState(10);
	const [title, setTitle] = useState(10);

	//Start-Stop counter
	function StartCounter() {
		setStartCounter(!startcounter);
		if (startcounter) {
			setButton("Stop");
		} else {
			setButton("Start");
		}
	}

	useEffect(() => {
		if (seccounter > title && !alert) {
			window.alert("Oh look, an alert!");
			setAlert(1);
		}
	}, [seccounter]);

	function alertSeconds() {
		setTitle(event.target.value);
		setAlert(0);
	}

	//Set counter time
	useEffect(() => {
		let seccounter_aux = 0;
		let interval = setInterval(() => {
			if (startcounter) {
				seccounter_aux++;
			}
			setSecCounter(seccounter_aux);
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	console.log(title);
	//let invalue = document.querySelectorAll("input");

	//console.log(document.getElementById("number").value);

	// Interval comopent return
	return (
		<div className="text-center mt-5">
			<p>
				<button onClick={StartCounter}>{button}</button>
			</p>
			<p>
				<button onClick={alertSeconds}>Save</button>
				<input
					type="number"
					onChange={alertSeconds}
					defaultValue="10"
				/>
			</p>

			<Counter seccounter={seccounter} />
		</div>
	);
}

Interval.propTypes = {
	inputValue: PropTypes.number
};
