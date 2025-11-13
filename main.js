const initPinScreen = (selector, onEnter) => {
	const container = document.querySelector(selector);
	const input = container.querySelector(".pin-value");
	const keys = container.querySelectorAll(".pin-keyboard-key");

	const clear = () => {
		input.value = "";
	};

	for (const key of keys) {
		key.addEventListener("click", () => {
			const value = key.textContent.trim();

			if (key.classList.contains("pin-keyboard-key--clear")) {
				clear();
			} else if (key.classList.contains("pin-keyboard-key--enter")) {
				input.value && onEnter && onEnter(input.value, clear);
			} else {
				input.value += value;
			}
		});
	}
};

initPinScreen("#mainPinScreen", (pin, clear) => {
	console.log(`Entered Pin: ${pin}`);
	clear();
});
