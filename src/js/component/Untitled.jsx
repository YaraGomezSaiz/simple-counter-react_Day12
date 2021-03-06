//import react into the bundle
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../../styles/index.scss";

// Include icons FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";

import BlackCard from "./card.jsx";

export function Counter() {
	const [seccounter, setSecCounter] = useState(0);
	const [startcounter, setStartCounter] = useState(true);
	const [button, setButton] = useState("Start");
	const [years, setYears] = useState(0);
	const [months, setMonths] = useState(0);
	const [days, setDays] = useState(0);
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);

	const [und, setUnd] = useState(0);
	const [dec, setDec] = useState(0);
	const [cen, setCen] = useState(0);
	const [um, setUM] = useState(0);
	const [udec, setUDec] = useState(0);
	const [ucen, setUCen] = useState(0);

	//Start-Stop counter
	function StartCounter() {
		setStartCounter(!startcounter);
		if (startcounter) {
			setButton("Stop");
		} else {
			setButton("Start");
		}
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

	//convert unidades to um,cen,dec,und

	useEffect(() => {
		let ucen_aux = Math.round(seccounter / 100000);
		if (ucen_aux != 10) {
			setUCen(ucen_aux);
		} else {
			setUCen(0);
		}

		let udec_aux = Math.round((seccounter - ucen * 100000) / 10000);
		if (udec_aux != 10) {
			setUDec(udec_aux);
		} else {
			setUDec(0);
		}

		let UM_aux = Math.round(
			(seccounter - (ucen * 100000 + udec * 10000)) / 1000
		);

		if (UM_aux != 10) {
			setUM(UM_aux);
		} else {
			setUM(0);
		}

		let cen_aux = Math.floor(
			(seccounter - (ucen * 100000 + udec * 10000 + um * 1000)) / 100
		);
		if (cen_aux != 10) {
			setCen(Math.floor(cen_aux));
		} else {
			setCen(0);
		}

		let dec_aux = Math.floor(
			(seccounter -
				(ucen * 100000 + udec * 10000 + um * 1000 + cen * 100)) /
				10
		);
		if (dec_aux != 10) {
			setDec(dec_aux);
		} else {
			setDec(0);
		}

		let und_aux = Math.floor(
			seccounter -
				(ucen * 100000 +
					udec * 10000 +
					um * 1000 +
					cen * 100 +
					dec * 10)
		);
		if (und_aux != 10) {
			setUnd(und_aux);
		} else {
			setUnd(0);
		}
	}, [seccounter]);

	/*	// para mostrar la cuenta en horas/minutos/segundos
	useEffect(() => {
		setSeconds(Math.round(seccounter % 60));
		setHours(Math.floor(seccounter / 3600));
		setMinutes(Math.floor(seccounter / 60) % 60);
    }, [seccounter]);
*/

	return (
		<div className="text-center mt-5">
			<p>
				<button onClick={StartCounter}>{button}</button>
			</p>
			<div className="container-fluid  ">
				<div className="row justify-content-center">
					<div className="cardNumber">
						<BlackCard
							number={
								<FontAwesomeIcon icon={faClock} size="1x" />
							}
						/>
					</div>
					<div className="cardNumber">
						<BlackCard number={ucen} />
					</div>
					<div className="cardNumber">
						<BlackCard number={udec} />
					</div>
					<div className="cardNumber">
						<BlackCard number={um} />
					</div>
					<div className="cardNumber">
						<BlackCard number={cen} />
					</div>
					<div className="cardNumber">
						<BlackCard number={dec} />
					</div>
					<div className="cardNumber">
						<BlackCard number={und} />
					</div>
				</div>
			</div>
		</div>
	);
}
