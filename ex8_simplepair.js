function simplePair(arr) {
    var result = 0;
    for (var i = 0; i < arr.length; i++)
        {
        for (var j = i + 1; j < arr.length; j++)
            {
              if (arr[i] % arr[j] === 0 || arr[j] % arr[i] === 0)
                {
                result++;
                }
         }
      }
    return result;
}

console.log(simplePair([1, 2, 3], 3))
console.log(simplePair([1, 2, 3], 6))
console.log(simplePair([1, 2, 3], 9))