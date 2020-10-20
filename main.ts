// function log(message){
//   console.log(message)
// };
// var message = "First TypeScript!!";
// log(message);
import { Point } from './point';


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

// class Point{

//   // two fields and one method : three members

//   // private x: number;
//   // private _y: number;
//   // x: number;
//   // _y: number;

//   // ? means Optional.

//   constructor(private _x?: number, private _y?:number){
//     // this._x = _x;
//     // this._y = _y;
//   }

//   draw(){
//     console.log('X: ' + this._x + ', Y: ' + this._y);
//   }

//   get x(){
//     return this._x;
//   }

//   set x(value) {
//     if (value < 0)
//         throw new Error ('Value Cannot be less than 0.');
//     this._x = value;
//   }
// }

// let point = new Point(1, 2);
// let x = point.x;  
// point.x = 10;
// point.draw();

let point = new Point(1, 2);
point.draw();