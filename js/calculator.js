function calculate() {
	const num1 = parseFloat(document.getElementById('num1').value);
	const num2 = parseFloat(document.getElementById('num2').value);
	const operatorValue = document.getElementById('operator').value;
	let result;
	switch (operatorValue) {
		case '+':
			result = num1 + num2;
			break;
		case '-':
			result = num1 - num2;
			break;
		case '×':
			result = num1 * num2;
			break;
		case '÷':
			if (num2 !== 0) {
				result = num1 / num2;
			} else {
				alert("除数不能为零");
				return;
			}
			break;
	}
	document.getElementById('result').value = result;
}