import {useState} from "react";

export default function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<div className="images">
				<img src="./images/bg-main-desktop.png" alt="" />
				<img src="./images/bg-card-front.png" alt="" />
				<img src="./images/bg-card-back.png" alt="" />
			</div>
			<form action="">
				<div>
					<input type="text" name="name" id="name" />
					<label for="name">Cardholder Name</label>
				</div>
			</form>
			<div class="attribution">
				Challenge by
				<a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
					Frontend Mentor
				</a>
				. Coded by{" "}
				<a href="https://github.com/vietan0" target="_blank">
					Viet An
				</a>
				.
			</div>
			<p>
				<button type="button" onClick={() => setCount(count => count + 1)}>
					count is: {count}
				</button>
			</p>
		</div>
	);
}
