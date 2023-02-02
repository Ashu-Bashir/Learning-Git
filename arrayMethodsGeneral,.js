const a = [1,2,3,4];
console.log(a); 


console.log(2/0)
console.log(a/2)


console.log("Hi Ashu how r u")



const anarr = [1,2,3,4];
anarr.unshift(8,9)



const arr = [];
arr.join = 1; // re-assign `join` with a non-function
console.log(arr.toString()); // [object Array]

console.log(Array.prototype.toString.call({ join: () => 1 })); // 1


const array1 = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
const localeString = array1.toLocaleString('en', { timeZone: 'UTC' });

console.log(localeString);


const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
console.log(months)

months.splice(2, 0, "okay")
console.log(months)



const animals = ['ant', 'bison', 'camel', 'duck', 'elephant' , 'ant'];

console.log(Array.from(animals))

console.log(animals.lastIndexOf("ant"))
console.log(animals.lastIndexOf("jenia")) // if that is not present in the array


console.log(animals.slice(2));

console.log(animals)


const arr2= [11,1]
arr2.shift(1)
console.log(arr2)



const array123 = [[0, 1], [2, 3], [4, 5]];

const result = array123.reduceRight((accumulator, currentValue) => accumulator.concat(currentValue));

console.log(result);


console.log(Array.isArray(new Array(3)));



const array2= [1,2,3,,4]

const ansarray2 = array2.map(element => element *2)
console.log(ansarray2)




const arr6 = [0, 1, 2, [[[3, 4]]]];

console.log(arr6.flat(2));