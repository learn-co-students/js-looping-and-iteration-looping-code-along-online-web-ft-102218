function printBadges(name) {
	for (let i = 0; i < name.length; i++) {
		console.log(`Welcome ${name[i]}! You are employee #${i + 1}.`);
	}
	return name;
}

function flip() {
	return Math.random() >= 0.5;
}

function tailsNeverFails() {
	let tailsFlipCount = 0;
	while (flip()) {
		tailsFlipCount++;
	}
	return `You got ${tailsFlipCount} tails in a row!`;
}
