function getBudgets(arr) {
    let sum = 0;
    for (let people of arr){
        sum += people.budget;
    }
    return sum;
}

let arrayOneTest =[
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve",  age: 32, budget: 40000 },
    { name: "Martin",  age: 16, budget:2700  }
  ];
let arrayTwoTest=[...arrayOneTest];
  
  let arrayThreeTest =[
  { name: "John", age: 21, budget: 29000 },
  { name: "Steve",  age: 32, budget: 32000 },
  { name: "Martin",  age: 16, budget: 1600  }
];
let arrayFourTest=[...arrayThreeTest];

console.log(arrayTwoTest);
console.log(getBudgets(arrayTwoTest));
console.log(arrayFourTest);
console.log(getBudgets(arrayFourTest));