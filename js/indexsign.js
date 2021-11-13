const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const mobile = document.getElementById('mobile');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
    const mobileValue = mobile.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	
	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}

    if(mobileValue === '') {
		setErrorFor(mobile, 'Number cannot be blank');
	} else if (isNaN(mobileValue)) {
        setErrorFor(mobile, 'enter only numbers');
    } else if (mobileValue.length < 10){
        setErrorFor(mobile, 'Mobile Number must be 10-Digit');
    } else if (mobileValue.length > 10) {
        setErrorFor(mobile,'Mobile Number must be 10-Digit');
    } else {
        setSuccessFor(mobile);
    }

    if(passwordValue == '' || password2Value == '') {
		setErrorFor(password,'Password cannot be blank');
        setErrorFor(password2,'Password2 cannot be blank');

    } else if(passwordValue !== password2Value){
        setErrorFor(password, 'Passwords does not match');
        setErrorFor(password2, 'Passwords does not match');

    } else {
        setSuccessFor(password);
        setSuccessFor(password2);

    }

}


function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

        //  const indicator = document.querySelector(".indicator");
        //  const input = document.querySelector("input");
        //  const weak = document.querySelector(".weak");
        //  const medium = document.querySelector(".medium");
        //  const strong = document.querySelector(".strong");
        //  const text = document.querySelector(".text");
        
        //  let regExpWeak = /[a-z]/;
        //  let regExpMedium = /\d+/;
        //  let regExpStrong = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;
        //  function trigger(){
        //    if(input.value != ""){
        //      indicator.style.display = "block";
        //      indicator.style.display = "flex";
        //      if(input.value.length <= 3 && (input.value.match(regExpWeak) || input.value.match(regExpMedium) || input.value.match(regExpStrong)))no=1;
        //      if(input.value.length >= 6 && ((input.value.match(regExpWeak) && input.value.match(regExpMedium)) || (input.value.match(regExpMedium) && input.value.match(regExpStrong)) || (input.value.match(regExpWeak) && input.value.match(regExpStrong))))no=2;
        //      if(input.value.length >= 6 && input.value.match(regExpWeak) && input.value.match(regExpMedium) && input.value.match(regExpStrong))no=3;
        //      if(no==1){
        //        weak.classList.add("active");
        //        text.style.display = "block";
        //        text.textContent = "Your password is too weak";
        //        text.classList.add("weak");
        //      }
        //      if(no==2){
        //        medium.classList.add("active");
        //        text.textContent = "Your password is medium";
        //        text.classList.add("medium");
        //      }else{
        //        medium.classList.remove("active");
        //        text.classList.remove("medium");
        //      }
        //      if(no==3){
        //        weak.classList.add("active");
        //        medium.classList.add("active");
        //        strong.classList.add("active");
        //        text.textContent = "Your password is strong";
        //        text.classList.add("strong");
        //      }else{
        //        strong.classList.remove("active");
        //        text.classList.remove("strong");
        //      }
           
        //    }else{
        //      indicator.style.display = "none";
        //      text.style.display = "none";
        //      showBtn.style.display = "none";
        //    }
        //  }











