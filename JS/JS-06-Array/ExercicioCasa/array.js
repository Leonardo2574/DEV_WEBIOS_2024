let array = ["HTML", 1993, "CSS", 1996, "Bootstrap", 2011, "JS", 1995, "React", 2013, "Java", 1995]

console.log(array)
console.log(array.length)
console.log(array[6])

var texto = array.toString()
console.log(texto)

var texto2 = array.join("/")
console.log(texto2)

var texto3 = array.unshift('IOS')
console.log(texto3)
console.log(array)
console.log(array.length)

//PARTE 2 DO EXERCICIO 

let bidi = [
    ['HTML', 1993, 'CSS', 1996],
    ['Bootstrap', 2011, 'JS', 1995],
    ['React', 2013, 'Java', 1995 ],
]
console.log(bidi)
console.log(bidi.length)
console.log(bidi[2][1])

bidi[1][2] ='JavaScript'
console.log(bidi)

delete bidi[2][2]
console.log(bidi)

var texto4 = bidi.push('pipoca')
console.log(bidi)
console.log(texto4)




