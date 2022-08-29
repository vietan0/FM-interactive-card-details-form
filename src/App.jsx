import {useState, useEffect} from "react";
import Completed from "./Completed";
import Form from "./Form";
import validate from "./validate";
import injectSpaces from "./injectSpaces";
import cardLogo from "../images/card-logo.svg";

export default function App() {
	const [formData, setFormData] = useState({
		cardHolder: "",
		cardNum: "",
		expMonth: "",
		expYear: "",
		cvv: "",
	});
	const [errorMessage, setErrorMessage] = useState({
		cardHolder: "",
		cardNum: "",
		expMonth: "",
		expYear: "",
		cvv: "",
	});

	const [confirmed, setConfirmed] = useState(false);
	const [submitted, setSubmitted] = useState(false);

	function updateForm(e) {
		setFormData(prevForm => {
			if (e.target.name === "cardNum") {
				return {
					...prevForm,
					cardNum: e.target.value.replaceAll(" ", ""),
				};
			}
			return {
				...prevForm,
				[e.target.name]: e.target.value.toUpperCase(),
			};
		});
	}

	function handleConfirm(e) {
		e.preventDefault();
		validate(formData, setErrorMessage, errorMessage);
		setConfirmed(true);
	}

	function reset() {
		setFormData({
			cardHolder: "",
			cardNum: "",
			expMonth: "",
			expYear: "",
			cvv: "",
		});
		setErrorMessage({
			cardHolder: "",
			cardNum: "",
			expMonth: "",
			expYear: "",
			cvv: "",
		});
		setConfirmed(false);
		setSubmitted(false);
	}

	useEffect(() => {
		if (Object.values(errorMessage).every(m => m === "") && confirmed) {
			setSubmitted(true);
		}
	}, [errorMessage, confirmed]);

	return (
		<>
			<aside className="decor">
				<div className="card-front">
					<img src={cardLogo} alt="" width="84" height="47" />
					<div className="info">
						<p className="card-number">
							{formData.cardNum
								? injectSpaces(formData.cardNum)
								: "0000 0000 0000 0000"}
						</p>
						<div>
							<span className="card-name">{formData.cardHolder || "Jane Doe"}</span>
							<span className="expired-date">
								{formData.expMonth || "MM"}/{formData.expYear || "YY"}
							</span>
						</div>
					</div>
				</div>
				<div className="card-back">
					<span className="cvv">{formData.cvv || "cvv"}</span>
				</div>
			</aside>
			<main>
				<h1 className="sr-only">
					Interactive card details form - Frontend Mentor Challenge - Solution by Viet An
				</h1>
				{!submitted ? (
					<Form
						formData={formData}
						errorMessage={errorMessage}
						updateForm={updateForm}
						handleConfirm={handleConfirm}
						reset={reset}
					/>
				) : (
					<Completed reset={reset} />
				)}
				<div className="attribution">
					Challenge by{" "}
					<a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
						Frontend Mentor
					</a>
					. Coded by{" "}
					<a href="https://github.com/vietan0" target="_blank">
						Việt An
					</a>
					.
				</div>
			</main>
		</>
	);
}
