// masala1 easy
// let arr = [1, 2, 3, 4, 5];
// arr.reverse();
// console.log(arr);

// masala ikkinchi yechimi
// let arr = [1, 2, 3, 4, 5];
// let reversedArr = [];
// while (arr.length) {
//   reversedArr.unshift(arr.shift());
// }
// console.log(reversedArr);

// masala2
// let str = "hello";
// let upperStr = str.toUpperCase();
// console.log(upperStr);

// masala3
// let arr = [1, 2, 3];
// arr.push(4);
// console.log(arr);

// masalaning ikkinchi yechimi
// let arr = [1, 2, 3];
// arr[arr.length] = 4;
// console.log(arr);

// masala4
// let arr = [7, 8, 9];
// let length = arr.length;
// console.log(length);

// masala5
// let str = "Hello Word";
// let newStr = str.replace("World", "JavaScript");
// console.log(newStr);

// masala6
// let arr = [4, 5, 6];
// let firstElement = arr[0];
// console.log([firstElement]);

// masala7
// let str = "Uzbekistan";
// console.log(str.length);

// masala8
// let arr = [2, 3, 4];
// arr.unshift(1);
// console.log(arr);

// masala9
// let str = "JAVASCRIPT";
// let lowerStr = str.toLowerCase();
// console.log(lowerStr);

// masala10
// let arr = ["apple", "banana", "cherry"];
// let str = arr.join(", ");
// console.log(str);

// medium //
// masala1
// let arr = [5, 2, 9, 1, 7];
// arr.sort((a, b) => a - b);
// console.log(arr);

// masala2
// let str = "apple, banana, cherry";
// let arr = str.split(", ");
// console.log(arr);

// masala3
// let arr = [1, 2, 3, 4, 5];
// let value = arr.includes(3);
// console.log(value);

// masala4
// let str = "Javascript";
// let substr = str.substring(0, 4);
// console.log(substr);

// masala5
// let arr = [1, 2, 3, 4, 5, 6];
// let numbers = arr.filter(function (val) {
//   return val % 2 == 0;
// });
// console.log(numbers);

//  Ikkinchi usul
// let arr = [1, 2, 3, 4, 5, 6];
// let numbers = arr.filter((num) => num % 2 == 0);
// console.log(numbers);

// masala6
// let str = "hello world";
// let search = "world";
// let result = str.includes(search);
// console.log(result);

// masala7
// let arr = [10, 20, 30, 40];
// console.log(arr.indexOf(30));

// masala8
// let arr = [1, 2, 3, 4, 5];
// let separate = arr.slice(1, 3);
// console.log(separate);

// masala9
// let arr = [5, 10, 15];
// let sum = 0;
// arr.forEach((n) => (sum += n));
// console.log(sum);

// masala10
// let str = "123-456-789";
// let replace = str.replaceAll("-", " ");
// console.log(replace);

// masala11
// let arr = [3, 1, 5, 9, 2];
// let maxValue = Math.max(...arr);
// console.log(maxValue);

// masala12
// let arr = ["orange", "apple", "banana"];
// let sortArr = arr.sort();
// console.log(sortArr);

// masala13
// let arr = [2, 4, 6];
// let condition = arr.every((num) => num % 2 == 0);
// console.log(condition);

// masala14
// let str = "javascript";
// let teskari = [...str].reverse().join("");
// console.log(teskari);

// masala15
// let arr = [1, 2, 3, 4];
// let newarr = arr.map((num) => num + 2);
// console.log(newarr);

// Hard //
// masala1
// let str = "madam";
// let polindrom = str == [...str].reverse().join("");
// console.log(polindrom);

// masala2
// function getRandomElements(arr, n) {
//   return arr.sort(() => Math.random() - 0.5).slice(0, n);
// }
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let randomElements = getRandomElements(arr, 3);
// console.log(randomElements);

// masala3
// let str = ["apple", "banana", "apple", "orange", "banana"];
// let unical = [...new Set(str)];
// console.log(unical);

// masala4
// let arr = [1, [2, 3], [4, 5], [6]];
// let flatarr = arr.flat(Infinity);
// console.log(flatarr);

// masala5
// let str = "hello world from javascript";
// let words = str.split(" ");
// for (let i = 0; i < words.length; i++) {
//   words[i] = words[i][0].toUpperCase() + words[i].slice(1);
// }
// let capitalized = words.join(" ");
// console.log(capitalized);
