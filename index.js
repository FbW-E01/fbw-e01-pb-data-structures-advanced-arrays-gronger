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

console.log("------------------------------------------------------------------------------");

// 2. Increment by 1

const arrayOfNumbers = [3, 45, 6, 56, 7, 9];

arrayOfNumbers.forEach(function(number) {
    number++;
    console.log(number);
});

console.log("------------------------------------------------------------------------------");


// 3. Filter Evens

const severalNumbers = [4, 9, 11, 14, 21, 88];

severalNumbers.forEach(function(number) {
    if (number % 2 == 0) {
    console.log(number); 
}
});

console.log("------------------------------------------------------------------------------");

// 4. Filter Friends 

const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];

// friends.forEach(function(x) {

// });


// use .includes() ??
