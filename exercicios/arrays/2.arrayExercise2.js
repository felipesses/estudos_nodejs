/* var array = ['a', true, 2, 2.54];
array[4] = 20;

console.log('Is this an array? -> ' + Array.isArray(array))

console.log('Complete array: ' + array)

console.log('Third emelent: ' + array[4])

console.log('Array length: ' + array.length)
 */


var array = ['Banana', 'Uva', 'Limão', 'PC Gamer']

console.log('Original array: ' + array)

array.pop()

console.log('Array after pop: ' + array)

array.push('Laranja', 'Jambo')

console.log('Array after push: ' + array)

array.shift()

console.log('Array after shift: ' + array)

array.unshift('Banana')

console.log('Array after unshift: ' + array)

array.reverse()

console.log('Array after reverse: ' + array)

array.fill(' ja comi ', 2, 4)

console.log('Array after fill: ' + array)