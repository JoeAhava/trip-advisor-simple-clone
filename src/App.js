import React from "react";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Home from "./screens/Home";
export default function App() {
	return (
		<>
			<NavBar />
			<Routes>
				<Route path={`/`} element={<Home />} />
				<Route path={`/login`} element={<Login />} />
				<Route path={`/register`} element={<Register />} />
			</Routes>
		</>
	);
}
