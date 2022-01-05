import React from "react";

export default function NavBar() {
	return (
		<nav className="px-10 py-4 bg-slate-900 text-slate-50">
			<div className="container mx-auto grid grid-cols-2 align-items-end">
				<div className="justify-self-center align-self-end">TripAdv Clone</div>
				<ul className="justify-self-end flex">
					<li className="mx-10">
						<div className="px-2 py-1 bg-white text-slate-900 rounded flex items-center w-full shadow-sm border border-gray-200">
							<input
								type="search"
								name=""
								id=""
								placeholder="Search"
								x-model="q"
								className="w-full pr-4 text-sm outline-none focus:outline-none bg-transparent"
							/>
							<button
								onClick={(e) => {}}
								className="outline-none focus:outline-none"
							>
								<svg
									className=" w-5 text-gray-600 h-5 cursor-pointer"
									fill="none"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
								</svg>
							</button>
						</div>
					</li>
					<li className="mx-10">
						<a href="#!">Places</a>
					</li>
					<li>
						<a href="#!">Things to do</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}
