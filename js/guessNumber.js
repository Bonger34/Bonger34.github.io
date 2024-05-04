let randomNumber = Math.floor(Math.random() * 100) + 1;
let guessTimes = 0;
let minGuesses = Infinity;

let guessInput = document.getElementById('guessNumber');

guessInput.addEventListener('keyup', function(event) {
	if (event.key === 'Enter') {
		checkNumber();
	}
});

function checkNumber() {
	let guess = parseInt(document.getElementById('guessNumber').value);
	guessTimes += 1;
	if (isNaN(guess) || guess < 1 || guess > 100) {
		alert("请输入1到100之间的整数！");
	} else if (guess < randomNumber) {
		alert("小了，请再试一次！");
	} else if (guess > randomNumber) {
		alert("大了，请再试一次！");
	} else if (guess === randomNumber) {
		alert("恭喜，猜对了！正确答案就是" + randomNumber + "。\n" +
			"你一共猜了" + guessTimes + "次。已开始新游戏！");
		if (guessTimes < minGuesses) {
			minGuesses = guessTimes;
			document.getElementById('minGuesses').innerHTML = minGuesses;
		}
		randomNumber = Math.floor(Math.random() * 100) + 1;
		guessTimes = 0;
	}
	if (Infinity > minGuesses && minGuesses > 7) {
		document.getElementsByClassName('minGuesses')[0].style.borderColor = "red";
		document.getElementsByClassName('minGuesses')[0].style.backgroundColor = "rgba(255, 0, 0, 0.1)";
	} else if (7 >= minGuesses && minGuesses > 4) {
		document.getElementsByClassName('minGuesses')[0].style.borderColor = "yellow";
		document.getElementsByClassName('minGuesses')[0].style.backgroundColor = "rgba(255, 255, 0, 0.1)";
	} else if (4 >= minGuesses && minGuesses >= 1) {
		document.getElementsByClassName('minGuesses')[0].style.borderColor = "green";
		document.getElementsByClassName('minGuesses')[0].style.backgroundColor = "rgba(0, 255, 0, 0.1)";
	}
}