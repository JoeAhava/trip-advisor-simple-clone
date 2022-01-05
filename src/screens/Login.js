import React, { useState } from "react";

export default function Login() {
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);

	return (
		<div className="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-10 shadow-md">
			<div className="py-8 px-8 rounded-xl">
				<h1 className="font-medium text-2xl mt-3 text-center">Login</h1>
				<form className="mt-6">
					<div className="my-5 text-sm">
						<label for="email" className="block text-black">
							Email
						</label>
						<input
							type="email"
							autofocus
							id="email"
							className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
							placeholder="Email"
							value={email}
							onChange={({ target }) => setEmail(target.value)}
						/>
					</div>
					<div className="my-5 text-sm">
						<label for="password" className="block text-black">
							Password
						</label>
						<input
							type="password"
							id="password"
							className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
							placeholder="Password"
							value={password}
							onChange={({ target }) => setPassword(target.value)}
						/>
						<div className="flex justify-end mt-2 text-xs text-gray-600">
							<a href="/#!" className="hover:text-black">
								Forget Password?
							</a>
						</div>
					</div>

					<button className="block text-center text-white bg-gray-800 p-3 duration-300 rounded-sm hover:bg-black w-full">
						Login
					</button>
				</form>

				<p className="mt-12 text-xs text-center font-light text-gray-400">
					{" "}
					Don't have an account?{" "}
					<a href="/#!" className="text-black font-medium">
						{" "}
						Create One{" "}
					</a>{" "}
				</p>
			</div>
		</div>
	);
}
