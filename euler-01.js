
function* generateNaturalNumbers (end, start = 1) {
	for(let i = start; i < end; i++) yield i;
}

const filterBy = num => num % 3 === 0 || num % 5 === 0
const reducer = (accumulator, currentValue) => accumulator + currentValue
const sumOfMultiples = (n) => [...generateNaturalNumbers(n)].filter(i => filterBy(i)).reduce(reducer) 

console.log(sumOfMultiples(1000))