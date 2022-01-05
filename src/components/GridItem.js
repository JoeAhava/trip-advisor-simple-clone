import React from "react";
import { FaHeart } from "react-icons/fa";
export default function GridItem() {
	return (
		<>
			<div className="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
				<a href="#">
					<img
						className="rounded-t-lg w-full"
						src="https://picsum.photos/300/200"
						alt="product image"
					/>
				</a>
				<div className="px-5 py-5">
					<div className="flex items-center justify-between">
						<a href="#">
							<h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">
								Some Place
							</h3>
						</a>
						<span className="text-3xl font-bold text-gray-900 dark:text-white">
							<FaHeart />
						</span>
						{
							//     <a
							// 	href="#"
							// 	className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
							// >
							// 	View
							// </a>
						}
					</div>
				</div>
			</div>
		</>
	);
}
