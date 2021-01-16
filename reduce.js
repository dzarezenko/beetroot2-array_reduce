let a = [1, 2, 3, 4, 5, 2, 4, 1, 6, 7, 7, 5];

//let sum = a.reduce((sum, el) => sum + el, 0);
let b = a.reduce((acc, el, index, arr) => {
  if (!arr.slice(0, index).includes(el) && (!arr.slice(index + 1).includes(el) || index == arr.length - 1)) {
    acc.push(el);
  }

  return acc;
}, []);

console.log(a);
console.log(b);
