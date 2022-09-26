var inputEmail = document.form.email;
var inputPassword = document.form.password;
var label = document.querySelector('.placeholder-email');
var label2 = document.querySelector('.placeholder-password');
var str = label.innerText;
var str2 = label2.innerText;
var arr = str.split("");
var arr2 = str2.split("");


label.innerText = "";
label2.innerText = "";


function spanAppend(label, arr) {
	arr.forEach(
		function (text) {
			var span = document.createElement('span');
			span.innerHTML = text;
			label.append(span);
		}
	);
}
spanAppend(label, arr);
spanAppend(label2, arr2);

var placeSpan = document.querySelectorAll('.placeholder-email span');
var placeSpan2 = document.querySelectorAll('.placeholder-password span');

function placeHolderAnim(placeSpan) {
	for (var i = 0; i < placeSpan.length; i++) {
		placeSpan[i].style.transitionDelay = (i * 0.05) + "s";
		placeSpan[i].classList.add("email");
	}
}
placeHolderAnim(placeSpan);
placeHolderAnim(placeSpan2);

function inputFocus(inputEmail, placeSpan) {
	inputEmail.addEventListener('focusin', function () {
		for (var span of placeSpan) {
			span.classList.add('active');
		}
	})

	inputEmail.addEventListener('focusout', function () {
		for (var span of placeSpan) {
			span.classList.remove('active');
		}
	})
}
inputFocus(inputEmail, placeSpan);
inputFocus(inputPassword, placeSpan2);
