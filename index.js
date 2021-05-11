// 1. Get total orders

const orders = [
    { amount: 100 },
    { amount: 150 },
    { amount: 100 },
    { amount: 100 }
  ];



orders.forEach(function(order) {
    sum = orders[0].amount + orders[1].amount + orders[2].amount + orders[3].amount;
    console.log(sum);
} 
);

("------------------------------------------------------------------------------");

// 2. Increment by 1

const arrayOfNumbers = [3, 45, 6, 56, 7, 9];

arrayOfNumbers.forEach(function(number) {
    number++;
    console.log(number);
});

("------------------------------------------------------------------------------");


// 3. Filter Evens

const severalNumbers = [4, 9, 11, 14, 21, 88];

severalNumbers.forEach(function(number) {
    if (number % 2 == 0) {
    console.log(number); 
}
});

("------------------------------------------------------------------------------");

// 4. Filter Friends 

const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];


function friendsIncludes(array, toFilter) {
const result = array.filter(word => word.includes(toFilter));
 { return result };    
}


console.log(friendsIncludes(friends, "e"));

// 5. Sum Up
 
const arrayToReduce = [5, 7, 3];

function reduceArray(array) {
const reducer = (accumulator, currentValue) => accumulator + currentValue;
return array.reduce(reducer);
}

console.log(reduceArray(arrayToReduce));


// 6. Square Root

const numsToSquare = [7, 2, 10]

const squared = numsToSquare.map(x => x * x);
console.log(squared);
