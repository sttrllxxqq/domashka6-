var length = parseInt(prompt("Введіть довжину масиву:"));

var array = [];

for (var i = 0; i < length; i++) {
  var element = parseInt(prompt("Введіть елемент масиву:"));
  array.push(element);
}

for (var i = 0; i < length - 1; i++) {
  for (var j = i + 1; j < length; j++) {
    if (array[i] > array[j]) {
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
}

array.splice(1, 4);

var output = "";

for (var i = 0; i < array.length; i++) {
  output += array[i] + ", ";
}

document.getElementById("output").innerHTML = output;