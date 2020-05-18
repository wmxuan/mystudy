// 原始数据类型

// js类型分为两种：
// 原始数据类型（布尔值，数值，字符串，null，undefined，symbol）
// 对象类型（数组，对象）

// 布尔值：
let isDone: boolean = false;
// 使用boolean定义布尔值类型

let createdByNewBoolean: Boolean = new Boolean(1);
// **使用构造函数Boolean创造的对象不是布尔值，他是一个Boolean对象

let createdByBoolean: boolean = Boolean(1);
// 直接调用Boolean也可返回一个boolean类型

// 数值
let anumber: number = 1;
// 使用number定义数值类型
// ES6中二进制和八进制表示法，会被编译成十进制的数字

// 字符串
let myName: string = 'Tom';
// 使用string定义字符串类型

// 空值
// js中没有空值（void）的概念，在TS中，可以用void标识没有任何返回值的函数
function alertname(): void {
    alert("hello world!");
}

let unusable: void = undefined // null;
// 声明一个void类型的变量没有什么用，因为只能将它赋值为undefined和null

// Null和undefined
let u: undefined = undefined;
let n: null = null;
// 可以使用null和undefined来定义这两个原始数据类型

// 与void的区别是，undefined和null是所有类型的子类型，
// 也就是说undefined类型的变量，可以赋值给number类型的变量

// 这样不会报错
let num: number = undefined;

// 这样也不会报错
let u1: undefined;
let num1: number = u1;

// 而void类型的变量不能赋值给number类型的变量
// 会报错：Type 'void' is not assignable to type 'number'.
// let u2: void;
// let num2: number = u2;
