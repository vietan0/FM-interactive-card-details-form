export default function injectSpaces(str) {
	let groupsOf4 = [];

	for (let start = 0; start < str.length; start += 4) {
		let group = str.slice(start, start + 4);
		groupsOf4.push(group);
	}

	return groupsOf4.join(" ");
}