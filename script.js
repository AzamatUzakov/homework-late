// one 1
let arr = ['Azim', 'Muhammad', 'Azamat', 'Firuz', 'Sheroz']
let name = prompt('Введите своё имя');
let idx = arr.indexOf(name);
if (idx === -1) {
    alert("Нет ткого ученика")
} else {
    arr.splice(idx, 1)
    alert(arr)
}




// two 2
let are = [1, 2, false, 'hello', 24, 'world', undefined, null, 'error', 22];
let num = are.filter(item => typeof (item) === 'number');
let number = num.length;
console.log(number);
if (number >= 5 ) {
    alert('good')
} else {
    alert('folse')
}




// three 3

let arf = [[{ a: { price: 20 } }], [{ a: { price: 35 } }], [{ a: { price: 44 } }]]
let one = arf[0][0].a.price;
let two = arf[1][0].a.price;
let three = arf[2][0].a.price;
let total = one + two + three
alert('Итог ' + total)




