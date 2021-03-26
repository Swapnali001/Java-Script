let arr = [1, 1, 1, 1];
function f(arr) {
for (x in arr) {
arr[x] = 1
}
return arr;
}
console.log(arr);
console.log(f(arr));
console.log(arr);