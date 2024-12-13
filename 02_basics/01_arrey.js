// Arrey

const nums = [1,2,3,4];
const heroes = ["Shaktiman","Naagraj"];

const newArr = new Array (1,2,3,4); // ***** Good Practice*****

// console.log(nums[2]);

// Push
// nums.push(5);
// nums.push("");
// nums.pop();
// console.log(nums.length);
// console.log(nums);

// unShift/Shift - Delete/Add
nums.unshift(10);
nums.shift();
// console.log(nums);

// console.log(nums.includes(3));
// console.log(nums.indexOf(3))


// Join the Array and change in String Obj
const newarr3 = nums.join();
// console.log(nums);
// console.log(typeof newarr3);

// Slice & Splice
// const demo1 = [1,2,3,4,5]
const demo1 = new Array(1,2,3,4,5);
console.log(demo1.slice(1,4));
console.log(demo1);

demo1.splice(1,4);
console.log(demo1);
