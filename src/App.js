import "./App.css";
import React from "react";
import Navbar from "./Components/navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/home/Home";
import Footer from "./Components/footer/Footer";
import Road from "./Pages/Services/road-construction/Road";
import Building from "./Pages/Services/building-construction/Buliding";
import Plumbing from "./Pages/Services/Plumbing/Plumbing";
import About from "./Pages/about/about/About";
import UserInfo from "./Pages/ContactDetails/UserInfo";
function App() {
	const [showNavbar, setShowNavbar] = React.useState(false);

	React.useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 100) {
				setShowNavbar(true);
			} else {
				setShowNavbar(false);
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<Router>
			{showNavbar && <Navbar />}
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/road-construction.zw' element={<Road />} />
				<Route path='/building-construction' element={<Building />} />
				<Route path='/plumbing-zw' element={<Plumbing />} />
				<Route path='/about-us' element={<About />} />
				<Route path='/contact-us' element={<UserInfo />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
