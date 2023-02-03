const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = arr1;

arr2[0] = 99;

console.log(arr1);

console.log(...arr1);
console.log(arr1[0], arr1[1]);

console.log(Math.max(...arr1));

const arr3 = [...arr1]; //två ställen i minnet
arr3[1] = 66;
console.log(arr3);
console.log(arr1);

const obj1 = {
  p1: "från objekt 1",
};

const obj2 = {
  p2: "från objekt 2",
  p3: "också från objekt 2",
};

const obj3 = { ...obj1, ...obj2 };
console.log(obj3); //Innehåller egenskaperna p1, p2, p3


const arr4 = [...arr1, ...arr3];
// arr4[2] = (...arr2;

console.log(arr4);