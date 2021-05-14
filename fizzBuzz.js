
// Divisivel por 3 => Fizz
// Divisivel por 5 => Buzz
// Divisivel por 3 e 5 => FizzBuzz

/*
for (let i = 0; i <= 100; i++) {

    if(i % 3 === 0 && i % 5 === 0) 
      console.log('FizzBuzz');
      else if (i % 3 === 0)
      console.log('Fizz');
      else if (i % 5 === 0) 
          console.log('Buzz');
      else if (typeof i !== 'NUMMER')
       console.log(i);
}

*/

for (let i = 1; i <= 100; i++) {
    ergebniss = (i%3 == 0) ? ((i%5 == 0) ? "FizzBuzz" : "Buzz") : ((i%5 == 0) ? "Fizz" : i)
    console.log(ergebniss);

}