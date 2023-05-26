let str = " em ăn cơm tối chưa ";
let newArray = str.trim().split(" ");
let newString = "";
for (let i = 0; i < newArray.length; i++) {
  newString +=newArray[i].charAt(0).toUpperCase() + newArray[i].slice(1).toLowerCase() + " ";
}
console.log(newString);