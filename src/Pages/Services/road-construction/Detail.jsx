import React from "react";
import { servicesData } from "./data";
import LastSection from "../../../Components/home-compnents/last-section/LastSection";
export default function Detail() {
	return (
		<div className='details-container'>
			<div>
				<div className='road-repair'>
					<h1>Road Repair & Construction</h1>
					<p>
						SILVER DEW INVESTMENTS is a trusted road repair contractor serving
						Harare and the rest of Zimbabwe. From pothole repairs to tarmac
						surfacing, we deliver high-quality services with efficiency and a
						focus on client needs. We work to maintain the condition of asphalt
						and concrete roads reducing the chances of personal injury and
						vehicular damage.
					</p>
				</div>

				<div className='image-container'>
					<img
						src='https://www.nntw.org/wp-content/uploads/2020/01/Highway-Maintenance-Superintendent-draft-e1592437214855.jpg'
						alt='Road repair'
					/>
				</div>
			</div>

			<div className='services'>
				{servicesData.map((service, index) => (
					<div className='service'>
						<h2>{service.title}</h2>
						<p>{service.description}</p>
					</div>
				))}
			</div>
			<LastSection />
		</div>
	);
}
