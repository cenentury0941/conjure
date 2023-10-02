import React from "react";
import "../common/Slide.css";
import "./Home.css";
import "../common/Button.css";
import { useNavigate } from "react-router-dom";

function HomeSlide() {
	const navigate = useNavigate();

	return (
		<div className="Slide Home-Slide-Container">
			<div className="Home-Horizontal-Divider">
				<div className="Home-Title-Container">
					<div className="Home-Logo" />
					<div className="Home-Title">Conjure</div>
				</div>

				<div className="Home-Sub-Title-Container">
					<div className="Home-Sub-Title">
						Generative AI based rapid prototyping
					</div>
				</div>
			</div>
			<div className="Home-Horizontal-Divider">
				<div className="Home-Button-Container">
					<div
						className="Button"
						onClick={() => {
							window.location.assign(
								"https://github.com/cenentury0941/conjure"
							);
						}}>
						Go To Repo
					</div>
					<div
						className="Button"
						onClick={() => {
							navigate("/conjure/generate");
						}}>
						Create Something
					</div>
				</div>
			</div>
			<div className="Home-Down-Arrow" />
		</div>
	);
}

export default HomeSlide;
