// 函数的类型


// 函数声明
// 在js中，有函数声明和函数表达式两种定义函数的方式
// 函数声明
function sum1(x, y) {
    return x + y;
}
// 函数表达式
let mySum = function (x, y) {
    return x + y;
}

// 对函数声明进行约束
function sum2(x: number, y: number): number {
    return x + y;
}
sum2(1, 1);//****注意，输入多余的（或者少于要求的）参数，都是不被允许的 */

// 对函数表达式进行约束
let mySum1: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
}
//TS的类型定义中的=>用来表述函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型
//ES6中，=>叫做箭头函数

// 用接口定义函数的形状
interface SearchFunc {
    (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
    return source.search(subString) !== 1;
}
//采用函数表达式接口定义函数的额方式时，对等号左侧进行类型限制，可以保证以后对函数名赋值时保证
// 参数个数，参数类型，返回值不变

// 可选参数
function buildName(firstName: string, lastName?: string) {
    if (lastName) {
        return firstName + ' ' + lastName;
    } else {
        return firstName;
    }
}
let tomcat = buildName('tom', 'cat');
let tom = buildName('tom');
//用？表示可选参数，可选参数必须接在必需参数后面，可选参数后面不允许再出现必需参数


//参数默认值
// TS会将添加了默认值的参数识别为可选参数
function buildName1(firstName: string, lastName: string = 'cat') {
    return firstName + ' ' + lastName;
}
let tomcat1 = buildName1('tom', 'cat');
let tom1 = buildName1('tom');
// 此时就没有可选参数必须在必需参数后面的限制
function buildName2(firstName: string = 'tom', lastName: string) {
    return firstName + ' ' + lastName;
}
let tomcat2 = buildName2('tom', 'cat');
let tom2 = buildName2(undefined, 'tom');

//剩余参数
// ES6中，可以使用...rest的方式活动函数中的剩余参数
function push(array, ...items) {
    items.forEach(function (item) {
        array.push(item);
    })
}
let a: any[] = [];
push(a, 1, 2, 3, 4, 5, 6, 7);

// items是一个数组，所以我们可以用数组的类型来定义它
function push1(array: any[], ...items: any[]) {
    items.forEach(function (item) {
        array.push(item);
    });
}
let a1 = [];
push1(a, 1, 2, 3, 4, 5, 6, 7);
// rest参数只能是最后一个参数


// 重载
// 重载允许一个函数接受不同数量或类型的参数时，作出不同的处理
// 利用联合类型实现不同输入输出不同
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
// 缺点：不能够精确表达，输入数字---输出数字，输入字符串---输出字符串
// 利用重载优化
function reverse1(x: number): number;
function reverse1(x: string): string;
function reverse1(x: number | string): number|string{
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
// 重复定义了多次函数reverse1，前几次都是函数定义，最后一次是函数实现
//****TS会优先从最前面的函数定义开始匹配，所以多个函数的定义如果有包含关系，需要优先吧精确的定义写在前面 */