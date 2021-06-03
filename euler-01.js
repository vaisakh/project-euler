const filterBy = num => num % 3 === 0 || num % 5 === 0;
const reducer = (accumulator, currentValue) => accumulator + currentValue;
const x = [1,2,3,4,5,6,7,8,9].filter(i => filterBy(i)).reduce(reducer)

console.log(x);