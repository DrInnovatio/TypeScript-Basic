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
// let a: number;
// let b: boolean;
// let c: string;
// let d: any;
// let e: number[] = [1,2,3];
// let f: any[] = [1, true, 'df', false];
// const colorRed = 0;
// const colorGreen = 1;
// const colorBlue = 2;
// enum Color {Red = 0, Green = 1, Blue = 2, Purple = 3};
// let backgroundColor = Color.Red;
// let message;
// message = 'abc';
// let endsWithC = (<string>message).endsWith('c');
// let alternativeWay = (message as string).endsWith('c');
var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    Point.prototype.getDistance = function (another) {
    };
    return Point;
}());
var point = new Point();
point.x = 1;
point.y = 2;
point.draw();
