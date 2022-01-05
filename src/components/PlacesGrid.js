import React, { useEffect, useState } from "react";
import GridItem from "./GridItem";

export default function PlacesGrid() {
	const [items, setItems] = useState([]);
	useEffect(() => {
		for (let i = 0; i < 15; i++) {
			setItems((prevItems) => {
				return [...prevItems, <GridItem />];
			});
		}
	}, []);
	return (
		<div className="px-2 py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
			{items.map((p) => p)}
		</div>
	);
}
