export const timeDifference = (current, previous) => {
	const milliSecondsPerMinute = 60 * 1000;
	const milliSecondsPerHour = milliSecondsPerMinute * 60;
	const milliSecondsPerDay = milliSecondsPerHour * 24;

	const elapsed = current - previous;

	if (elapsed < milliSecondsPerMinute / 3) {
		return "just now";
	}

	if (elapsed < milliSecondsPerMinute) {
		return "less than 1 min ago";
	}

	if (elapsed < milliSecondsPerHour) {
		return Math.round(elapsed / milliSecondsPerMinute) + " min ago";
	}

	if (elapsed < milliSecondsPerDay) {
		return Math.round(elapsed / milliSecondsPerHour) + " h ago";
	}

	if (elapsed < milliSecondsPerDay * 7) {
		return Math.round(elapsed / milliSecondsPerDay) + " days ago";
	}

	if (elapsed < milliSecondsPerDay * 30) {
		return Math.round(elapsed / (milliSecondsPerDay * 7)) + " weeks ago";
	}

	if (elapsed < milliSecondsPerDay * 365) {
		return Math.round(elapsed / (milliSecondsPerDay * 30)) + " months ago";
	}

	return Math.round(elapsed / milliSecondsPerDay / 365) + " years ago";
};
