import React from "react";
import construct from "../../../Asserts/roadwork.png";
import "./road.scss";
import { NavLink } from "react-router-dom";
import Detail from "./Details-component/Detail";
import Top from "../../../Components/home-compnents/topNavigation/Top";
import Projects from "./project/Projects";
import Navtab from "../../../Components/home-compnents/navigation/navtab";
import Navbar from "../../../Components/navbar/Navbar";

export default function Road() {
	return (
		<div className='container'>
			<Navbar />
			<Top />

			<div className='road-construction'>
				<div className='left'>
					<h1>
						Road <br /> Construction
					</h1>
				</div>
				<div className='right'>
					<img src={construct} alt='Road construction' />
					<div>
						<h1>SILVER DEW</h1>
						<span>CONSTRUCTIONS</span>
					</div>
				</div>
			</div>
			<Detail />
			<Projects />
		</div>
	);
}
