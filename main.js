// function log(message){
//   console.log(message)
// };
// var message = "First TypeScript!!";
// log(message);
// function doSomething(){
//   for (var i = 0; i < 5; i++){
//     console.log(i);
//   }
//     console.log("Finally : " + i);
// };
// doSomething();
var a;
var b;
var c;
var d;
var e = [1, 2, 3, 4, 5];
var f = [1, true, 'df', false];
var colorRed = 0;
var colorGreen = 1;
var colorBlue = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Purple"] = 3] = "Purple";
})(Color || (Color = {}));
;
var backgroundColor = Color.Red;
