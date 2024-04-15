function checkNumber() {
	var isResultTrue = false;
	if (!isResultTrue) {
		var randomNumber = Math.floor(Math.random() * 10) + 1;
	}
	var guess;
	guess = parseInt(document.getElementById('guessNumber').value);
	if (isNaN(guess)) {
		alert("请输入数字！")
	} else if (guess < randomNumber) {
		alert("小了，请再试一次！");
	} else if (guess > randomNumber) {
		alert("大了，请再试一次！");
	} else {
		alert("恭喜，猜对了！正确答案就是" + randomNumber + "。开始新游戏！");
		isResultTrue = true;
	}
}