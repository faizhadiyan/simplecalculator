let input = document.getElementById('input');

function clearInput() {
	input.value = '';
}

function appendInput(value) {
	input.value += value;
}

function calculate() {
	try {
		let result = eval(input.value);
		input.value = result;
	} catch (error) {
		alert('Invalid input');
	}
}

function backspace() {
	input.value = input.value.slice(0, -1);
}

function toggleNegative() {
	if (input.value.charAt(0) === '-') {
		input.value = input.value.slice(1);
	} else {
		input.value = '-' + input.value;
	}
}

function toggleDecimal() {
	if (!input.value.includes('.')) {
		appendInput('.');
	}
}
