import injectSpaces from "./injectSpaces";

export default function Form({formData, errorMessage, updateForm, handleConfirm, reset}) {
	return (
		<form>
			<div className="field">
				<label htmlFor="cardHolder">Cardholder Name</label>
				<div className="input-container">
					<input
						required
						type="text"
						name="cardHolder"
						id="cardHolder"
						placeholder="e.g. Jane Doe"
						value={formData.cardHolder}
						onChange={updateForm}
						className={errorMessage.cardHolder && "error"}
						maxLength="28"
					/>
					<div className="outline"></div>
				</div>
				{errorMessage.cardHolder && (
					<span className="error-message">{errorMessage.cardHolder}</span>
				)}
			</div>
			<div className="field">
				<label htmlFor="cardNum">Card Number</label>
				<div className="input-container">
					<input
						required
						type="text"
						name="cardNum"
						id="cardNum"
						placeholder="e.g. 0000 0000 0000 0000"
						value={injectSpaces(formData.cardNum)}
						onChange={updateForm}
						className={errorMessage.cardNum && "error"}
						maxLength="19"
					/>
					<div className="outline"></div>
				</div>
				{errorMessage.cardNum && (
					<span className="error-message">{errorMessage.cardNum}</span>
				)}
			</div>
			<div className="third-row">
				<div className="field">
					<label>Exp. Date</label>
					<div>
						<div className="input-container">
							<label htmlFor="expMonth">Expired Month</label>
							<input
								required
								type="text"
								name="expMonth"
								id="expMonth"
								placeholder="MM"
								value={formData.expMonth}
								onChange={updateForm}
								className={errorMessage.expMonth && "error"}
								maxLength="2"
							/>
							<div className="outline"></div>
						</div>
						<div className="input-container">
							<label htmlFor="expYear">Expired Year</label>
							<input
								required
								type="text"
								name="expYear"
								id="expYear"
								placeholder="YY"
								value={formData.expYear}
								onChange={updateForm}
								className={errorMessage.expYear && "error"}
								maxLength="2"
							/>
							<div className="outline"></div>
						</div>
					</div>

					<div className="error-message">
						<span>{errorMessage.expMonth && errorMessage.expMonth}</span>{" "}
						<span>{errorMessage.expYear && errorMessage.expYear}</span>
					</div>
				</div>
				<div className="field">
					<label htmlFor="cvv">cvv</label>
					<div className="input-container">
						<input
							required
							type="text"
							name="cvv"
							id="cvv"
							placeholder="e.g. 123"
							value={formData.cvv}
							onChange={updateForm}
							className={errorMessage.cvv && "error"}
							maxLength="3"
						/>
						<div className="outline"></div>
					</div>
					{errorMessage.cvv && <span className="error-message">{errorMessage.cvv}</span>}
				</div>
			</div>
			<div className="buttons">
				<button type="reset" onClick={reset} className="secondary-btn">
					Reset
				</button>
				<button onClick={handleConfirm} className="primary-btn">
					Confirm
				</button>
			</div>
		</form>
	);
}
