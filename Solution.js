let number=0;

while (true) {
	stringInput = prompt('Digite um número inteiro e maior do que zero')
	number = parseInt(stringInput);
	if (!number) {
		alert('Digite um número válido');
		continue
	}
	if (number<0) {
		alert('Digite um número inteiro maior do que zero');
		continue
	}
	break	
}

let sum=0;

for (let i=0; i<number; i++) {
  if(i%3 === 0) {
    console.log(i)
    sum += i
    continue
  }
  if(i%5 === 0) {
    console.log(i)
    sum += i
  }
}

alert('O resultado é: '+sum)
console.log(sum)