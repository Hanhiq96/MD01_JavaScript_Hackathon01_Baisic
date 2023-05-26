function checkYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  } else {
    return false;
  }
}
function dateMonth(month, year) {
  if (month === 2) {
    if (checkYear(year)) {
      return 29;
    } else {
      return 28;
    }
  } else if ([4, 6, 9, 11].includes(month)) {
    return 30;
  } else {
    return 31;
  }
}

var inputMonth = parseInt(prompt("Nhập tháng: "));
var inputYear = parseInt(prompt("Nhập năm: "));

var dates = dateMonth(inputMonth, inputYear);

console.log("Số ngày trong tháng " + inputMonth + " năm " + inputYear + " là " + dates + ".");
