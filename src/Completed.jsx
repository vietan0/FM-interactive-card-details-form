export default function Completed({reset}) {
	return (
		<div className="completed">
			<img src="/images/icon-complete.svg" alt="" />
			<h2>Thank you!</h2>
			<p>We've added your card detail.</p>
			<button onClick={reset}>Continue</button>
		</div>
	);
}
