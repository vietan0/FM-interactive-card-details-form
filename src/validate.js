function checkFormat(pairs, setErrorMessage) {
	let onlyLetters = /^[a-zA-Z\s]+$/i;
	let onlyNumbers = /^\d+$/i;
	for (let entry of pairs) {
		if (entry[0] === "cardHolder") {
			setErrorMessage(prev => ({
				...prev,
				[entry[0]]: onlyLetters.test(entry[1]) ? prev[entry[0]] : "Wrong format. Letters only.",
			}));
		} else {
			setErrorMessage(prev => ({
				...prev,
				[entry[0]]: onlyNumbers.test(entry[1]) ? prev[entry[0]] : "Wrong format. Numbers only.",
			}));
		}
	}
}
function checkLength(pairs, setErrorMessage) {
	for (let entry of pairs) {
		switch (entry[0]) {
			case "cardHolder":
				setErrorMessage(prev => ({
					...prev,
					cardHolder: entry[1].length > 2 ? prev[entry[0]] : "Length not right.",
				}));
				break;
			case "cardNum":
				setErrorMessage(prev => ({
					...prev,
					cardNum: entry[1].length === 16 ? prev[entry[0]] : "Length not right.",
				}));
				break;
			case "expMonth":
				setErrorMessage(prev => ({
					...prev,
					expMonth: entry[1].length === 2 ? prev[entry[0]] : "Length not right.",
				}));
				break;
			case "expYear":
				setErrorMessage(prev => ({
					...prev,
					expYear: entry[1].length === 2 ? prev[entry[0]] : "Length not right.",
				}));
				break;
			case "cvv":
				setErrorMessage(prev => ({
					...prev,
					cvv: entry[1].length === 3 ? prev[entry[0]] : "Length not right.",
				}));
				break;
		}
	}
}
function checkForBlanks(pairs, setErrorMessage) {
	for (let entry of pairs) {
		setErrorMessage(prev => ({
			...prev,
			[entry[0]]: entry[1] !== "" ? prev[entry[0]] : "Can't be blank.",
		}));
	}
}
function validMonth(pairs, setErrorMessage) {
	let month = pairs.find(entry => entry[0] === "expMonth");
	setErrorMessage(prev => ({
		...prev,
		expMonth: Number(month[1]) > 0 && Number(month[1]) <= 12 ? prev.expMonth : "Invalid month.",
	}));
}

export default function validate(formData, setErrorMessage) {
	let pairs = Object.entries(formData);

	setErrorMessage({
		cardHolder: "",
		cardNum: "",
		expMonth: "",
		expYear: "",
		cvv: "",
	});
	validMonth(pairs, setErrorMessage);
	checkFormat(pairs, setErrorMessage);
	checkLength(pairs, setErrorMessage);
	checkForBlanks(pairs, setErrorMessage);
}
