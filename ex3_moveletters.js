function captoFront(text){
    let chars = text.split('')

const uppercase = chars.filter((char) => char === char.toUpperCase())
const lowercase = chars.filter((char) => char === char.toLowerCase())

const result = [...uppercase, ...lowercase].join('')

console.log(result)

return result

}

captoFront("hApPy");
captoFront("moveMENT");
captoFront("shOrtCAKE");