// sử dụng hàm sort().
const numbers = [32, 52, 1, 9, -1, 8, 4, 3, 10];
numbers.sort((a, b) => b - a);
console.log(numbers);

// không sử dụng hàm sort().
function arrayReseve(arr) {
  var n = arr.length;
  for (var i = 0; i < n - 1; i++) {
    for (var j = i + 1; j < n; j++) {
      if (arr[i] < arr[j]) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }}};
  return arr;
}
var array = [32, 52, 1, 9, -1, 8, 4, 3, 10];
var arrArrange = arrayReseve(array);
console.log(arrArrange);
