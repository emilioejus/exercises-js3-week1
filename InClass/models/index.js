const imprimeParametros = require(`./funciones`)

const Book = require(`./models/books`)
const Dog = require(`./models/dogs`)
const Mammal = require(`./models/mammals`)
const Puppy = require(`./models/puppies`)
const Wolf = require(`./models/wolves`)

const compareNumbers = (m, n = 2) => {
  return `${m} ${(m < n ? "is smaller than" : "is bigger than or equal to" )} ${n}`
}

const puppy = new Puppy('beige', 'desert sky')
console.log(puppy)

// DESTRUCTURING
const array = [0, 1, 2]
const [a, b, c] = array
imprimeParametros(a, c)