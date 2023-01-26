function uniqBy(removeDups, key) {
    var seen = {};
    return removeDups.filter(function(item) {
        var k = key(item);
        return seen.hasOwnProperty(k) ? false : (seen[k] = true);
    })
}

removeDups = [[1, 0, 1, 0], ["The", "big", "cat"], ["John", "Taylor", "John"]]
// removeDups([1, 0, 1, 0])
// removeDups(["The", "big", "cat"])
// removeDups(["John", "Taylor", "John"])
removeDups = uniqBy(removeDups, JSON.stringify)
console.log(removeDups)

// function removeDups(word){
//     return Array.from(new Set(word)) 
// }
// const one = [1,0,1,0];
// const two = ["the","big","cat"];
// const three = ["John","Taylor","John"];

// console.log(removeDups(one)) ; 
// console.log(removeDups(two)) ; 
// console.log(removeDups(three)) ;