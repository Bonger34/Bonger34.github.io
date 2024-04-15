var randomNumber = Math.floor(Math.random() * 10) + 1;
var guessTimes = 0;

function checkNumber() {
	var isResultTrue = false;
	var guess = parseInt(document.getElementById('guessNumber').value);
	guessTimes += 1;
	if (guess < randomNumber) {
		alert("小了，请再试一次！");
	} else if (guess > randomNumber) {
		alert("大了，请再试一次！");
	} else if (guess = randomNumber) {
		alert("恭喜，猜对了！正确答案就是" + randomNumber + "。\n你一共猜了" + guessTimes + "次。已开始新游戏！");
		isResultTrue = true;
		randomNumber = Math.floor(Math.random() * 10) + 1;
		guessTimes = 0;
	}
}