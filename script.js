function guess() {
	let userAnswer = document.getElementById('userAnswer');
	if (userAnswer.value == secretNumber) {
		hint.className = 'bravo';
		hint.innerHTML = 'Bravo tu as trouvé';
		let userAnswerList = list.appendChild(document.createElement('li'));
		userAnswerList.className = 'bravo';
		userAnswerList.innerHTML = userAnswer.value;
		userAnswer.value = '';
	}
	else if (userAnswer.value < secretNumber) {
		hint.className = 'grand';
		if (triesCounter == 10) {
			loose();
			return;
		} else {
			hint.innerHTML = 'C\'est plus grand';
		}
		let userAnswerList = list.appendChild(document.createElement('li'));
		userAnswerList.className = 'grand';
		userAnswerList.innerHTML = userAnswer.value;
		userAnswer.value = '';
	}
	else {
		hint.className = 'petit';
		if (triesCounter == 10) {
			loose();
			return;
		}
		else {
			hint.innerHTML = 'C\'est plus grand';
		}
		let userAnswerList = list.appendChild(document.createElement('li'));
		userAnswerList.className = 'petit';
		userAnswerList.innerHTML = userAnswer.value;
		userAnswer.value = '';
	}
	triesCounter ++;
	document.getElementById('triesCounter').innerHTML = triesCounter;	
}
let check = document.getElementById('check');
let hint = document.getElementById('hint');
let list = document.getElementById('list');
let triesCounter = 0;
check.addEventListener("click", guess);
document.addEventListener("keydown", event => {
  if (event.isComposing || event.keyCode === 13) {
    guess ();
  }
});
let secretNumber = Math.floor(Math.random() * Math.floor(5000));

function loose() {
	hint.innerHTML = 'Tu as atteint les 10 essais, tu as perdu ...';
	check.removeEventListener('click');
}