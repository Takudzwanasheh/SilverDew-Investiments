import React from "react";
import FirstSection from "../../Components/home-compnents/first-section/First-seection";
import Second from "../../Components/home-compnents/second-section/Second";
import "./home.scss";
import LastSection from "../../Components/home-compnents/last-section/LastSection";
export default function Home() {
	return (
		<div className='container'>
			<FirstSection />
			<div>
				<Second />
				<LastSection />
			</div>
		</div>
	);
}
