
function* generateNumbers (start, end) {
	for(let i = start; i < end; i++) yield i;
}

const numbers = [...generateNumbers(1, 1000)];
const filterBy = num => num % 3 === 0 || num % 5 === 0;
const reducer = (accumulator, currentValue) => accumulator + currentValue;
const x = numbers.filter(i => filterBy(i)).reduce(reducer)

console.log(x);