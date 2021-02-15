import React from "react";

import { Counter } from "./counter.jsx";

import BlackCard from "./card.jsx";

import Interval from "./interval.jsx";

//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<Interval />
		</div>
	);
}
