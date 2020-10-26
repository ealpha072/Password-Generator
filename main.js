//DOM elements;
const results = document.querySelector('#results');
const length = document.querySelector('#length');
const uppercase = document.querySelector('#uppercase');
const lowercase = document.querySelector('#lowercase');
const numbers = document.querySelector('#numbers');
const symbolsEl = document.querySelector('#symbols');
const generate = document.querySelector('#generate');
const randomFunc = {
	lower:randomLowerCase,
	upper:randomUppercase,
	number:randomNumber,
	symbol:randomSymbol
};

//events 
generate.addEventListener('click',(e)=>{
	const passwordLen = parseInt(length.value);
	const hasLower = lowercase.checked;
	const hasUpper = uppercase.checked;
	const hasNum = numbers.checked;
	const hasSymbol = symbolsEl.checked;

	results.innerHTML = generatePassword(passwordLen,hasLower,hasUpper,hasNum,hasSymbol);

})

function generatePassword(len,l,u,n,s){
	let generatedPassword=  '';
	let checkCount = l+u+n+s;
	
	const typeArr = [{l},{u},{n},{s}];
	let filteredArr = typeArr.filter(item=>Object.values(item)[0])

	console.log(filteredArr);
}

//random uppercase,lowercase, symbols

 function randomLowerCase(){
 	let randomNum = Math.floor(Math.random()*26)+97;
 	return String.fromCharCode(randomNum)
}

function randomUppercase(){
	let randomNum = Math.floor(Math.random()*26)+65;
	return String.fromCharCode(randomNum)
}

function randomNumber(){
	let randomNum = Math.floor(Math.random()*10)+48;
	return String.fromCharCode(randomNum)
}

function randomSymbol(){
	let symbols = ['!','@','$','%','^','&','*','~','|','/']
	let randomSymbol = symbols[Math.floor(Math.random()*symbols.length)];
	return randomSymbol;
}

 //129 -- 154
