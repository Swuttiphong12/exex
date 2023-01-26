function sumTwoSmallestNums(numbers) {  
    var longestArr = [];
    for(var i = 0; i < numbers.length; i++) {
      if(numbers[i] < longestArr[0] || longestArr[0] == null) {
        if(longestArr[0] < longestArr[1] || longestArr[1] == null) {
          longestArr[1] = longestArr[0];
        }
        longestArr[0] = numbers[i];
      } else if(numbers[i] < longestArr[1] || longestArr[1] == null) {
        longestArr[1] = numbers[i];
      }
      
    }
    return longestArr[0] + longestArr[1];
  };

console.log(sumTwoSmallestNums([19, 5, 42, 2, 77]))
console.log(sumTwoSmallestNums([10, 343445353, 3453445, 3453545353453]))
console.log(sumTwoSmallestNums([2, 9, 6, -1]))
console.log(sumTwoSmallestNums([879, 953, 694, -847, 342, 221, -91, -723, 791, -587]))
console.log(sumTwoSmallestNums([3683, 2902, 3951, -475, 1617, -2385]))