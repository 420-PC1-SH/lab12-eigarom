function processor(transmission) {
	if (!transmission.includes("::")) {
		throw new Error('Data is invalid ; should contain "::"');
	}
	let parts = transmission.split("::");
	return {
		id: parseInt(parts[0]),
		rawData: parts[1]
	};
}

module.exports = processor;
