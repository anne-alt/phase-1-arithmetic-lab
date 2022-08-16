
// Write your code here
let num1=0
let num2=0
let num3=0
let num4=0

const multiply = (function (num1=31,num2=2) {
    return (num1*num2);
})();

const random = (function () {
    return (parseInt(Math.random() *10) + 1);
})();

const mod = (function (num3=20, num4=8) {
    return (num3 % num4);
})();

const max = (function () {
    return (Math.max(5, 10, 15, 20));
})();