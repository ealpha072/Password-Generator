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
	const passwordLen = +length.value;
	const hasLower = lowercase.checked;
	console.log(hasLower)
	const hasUpper = uppercase.checked;
	const hasNum = numbers.checked;
	const hasSymbol = symbolsEl.checked;

	results.innerText = generatePassword(
		hasLower,
		hasUpper,
		hasNum,
		hasSymbol,
		passwordLen);

})

function generatePassword(lower,upper,number,symbol,length){
	let generatedPassword =  '';
	let checkedCount = lower+upper+number+symbol;
	
	const typeArr = [{lower},{upper},{number},{symbol}].filter(item => Object.values(item)[0]);
	console.log(typeArr);

	if(checkedCount === 0){
		return '';
	}

	for(let i = 0 ; i < length; i += checkedCount){
		typeArr.forEach(type =>{
			const funcName = Object.keys(type)[0];
			generatedPassword += randomFunc[funcName]();

		})
	}
	const finalPass = generatedPassword.slice(0, length);
	return finalPass;
}

//random uppercase,lowercase, symbols

function randomLowerCase(){
 	return String.fromCharCode(Math.floor(Math.random()*26)+97)
}

function randomUppercase(){
	return String.fromCharCode( Math.floor(Math.random()*26)+65)
}

function randomNumber(){
	return String.fromCharCode(Math.floor(Math.random()*10)+48)
}

function randomSymbol(){
	let symbols = ['!','@','$','%','^','&','*','~','|','/']
	let randomSymbol = symbols[Math.floor(Math.random()*symbols.length)];
	return randomSymbol;
}
