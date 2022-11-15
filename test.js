function* gen1(){
    console.log(yield 1);
    console.log(yield 2);
    console.log(yield 3);
}

const i = gen1();

console.log(i.next('a').value);
console.log(i.next('b').value);
console.log(i.next('c').value);
