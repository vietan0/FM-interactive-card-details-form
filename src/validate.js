function checkFormat(pairs, setErrorMessage) {
	let onlyLetters = /^[a-zA-Z\s]+$/i;
	let onlyNumbers = /^\d+$/i;
	for (let p of pairs) {
		if (p[0] === "cardHolder") {
			setErrorMessage(prev => ({
				...prev,
				[p[0]]: onlyLetters.test(p[1]) ? prev[p[0]] : "Wrong format. Letters only.",
			}));
		} else {
			setErrorMessage(prev => ({
				...prev,
				[p[0]]: onlyNumbers.test(p[1]) ? prev[p[0]] : "Wrong format. Numbers only.",
			}));
		}
	}
	console.log("Format checked!");
}
function checkLength(pairs, setErrorMessage) {
	for (let p of pairs) {
		switch (p[0]) {
			case "cardHolder":
				setErrorMessage(prev => ({
					...prev,
					cardHolder: p[1].length > 2 ? prev[p[0]] : "Length not right.",
				}));
			case "cardNum":
				console.log(p[1].length === 16);
				setErrorMessage(prev => ({
					...prev,
					cardNum: p[1].length === 16 ? prev[p[0]] : "cardNum's Length not right.",
				}));
				break;
			case "expMonth":
				setErrorMessage(prev => ({
					...prev,
					expMonth: p[1].length === 2 ? prev[p[0]] : "Length not right.",
				}));
				break;
				cvv;
			case "expYear":
				setErrorMessage(prev => ({
					...prev,
					expYear: p[1].length === 2 ? prev[p[0]] : "Length not right.",
				}));
				break;
			case "cvv":
				setErrorMessage(prev => ({
					...prev,
					cvv: p[1].length === 3 ? prev[p[0]] : "Length not right.",
				}));
				break;
		}
	}
	console.log("Length checked!");
}
function checkForBlanks(pairs, setErrorMessage) {
	for (let p of pairs) {
		setErrorMessage(prev => ({
			...prev,
			[p[0]]: p[1] !== "" ? prev[p[0]] : "Can't be blank.",
		}));
	}
	console.log("Blanks checked!");
}
function validMonth(pairs, setErrorMessage) {
	let month = pairs.find(p => p[0] === "expMonth");
	setErrorMessage(prev => ({
		...prev,
		expMonth: Number(month[1]) > 0 && Number(month[1]) <= 12 ? prev.expMonth : "Invalid month.",
	}));
	console.log("Month validity checked!");
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
