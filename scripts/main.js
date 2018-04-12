//SortEvens

var arrayNumbers = [2, 5, 7, 10, 12, 13, 47, 48, 32, 6, 31, 94, 17, 30];

var testEven = findEven => findEven.filter(num => num % 2 === 0 );

testEven(arrayNumbers);

//Word Count

var arrayCount = ["Bruh, what is your problem?", "¿Como estas, senorita?", "Hello, it's me. I was wondering...", "If I was a bird, I'd fly.", "Where is the bathroom?"];



//Capitalize

var arrayCap = ["apple", "pizza", "egg", "candy", "cereal"];

var cap = capitalize => capitalize.map(word => word.charAt(0).toUpperCase() + word.slice(1) );

cap(arrayCap);

//Alphabetical

var arrayAlpha = ["ugly","cute","tall","short","fat"];

var alpha = ["a", "b", "c", "d", "e", "f ", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var sort = sortWords => sortWords.map(word => word % 2 === 0 );

sort(arrayAlpha);

//Fizz-Buzz

var buzzArray = [2, 5, 7, 10, 12, 13, 47, 48, 32, 6, 31, 94, 17, 30];

var fizzBuzz = a => {
	return a.map(num => {
		if(num % 3 === 0 && num % 5 === 0){
			return "FizzBuzz"
			}else{
				if(num % 3 === 0){
					return "Fizz"
				}else if (num % 5 === 0){
					return "Buzz"
				}else {
					return num;
			}
		}
	});
}

fizzBuzz(buzzArray);