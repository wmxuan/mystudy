// 对象的类型-----接口


// 在TS中，使用接口来定义对象的类型

// 在面向对象语言中，接口是很重要的概念，它是对行为的抽象，而具体如何行动，需要有类去实现。
// TS中的接口是一个非常灵活的概念。除了可用于对类的一部分行为进行抽象以外，也常用于对[对象的形状]进行描述

// 例子：（接口一般首字母大写，有的编程语言会建议接口的名称加上I前缀）
interface Person {
    name: string;//确定属性
    age: number;
}

let tom: Person = {
    name: 'tom',
    age: 25
}
// 定义了一个接口Person，接着定义了一个变量tom，他的类型是Person,这样就约束了tom的形状必须和接口Person一致

// 赋值的时候，变量的形状必须和接口的形状保持一致
// 1.定义的变量比接口少了一些属性是不允许的。
// 2.定义的变量比接口多了一些属性也是不允许的。

// 可选属性:该属性可以不存在
interface Person1 {
    name: string;//确定属性
    age?: number;//可选属性
}
let tom1: Person1 = {
    name: 'tom'
}
let tom2: Person1 = {
    name: 'tom',
    age: 23
}
// 此时仍然不允许添加未定义的属性

// 任意属性：
interface Person2 {
    name: string;
    age?: number;
    [propName: string]: any;
}

let tom3: Person2 = {
    name: 'tom',
    gender: 'male'
}
// 使用[propName: string]定义了任意属性取，一个接口中只能定义一个任意属性，如果接口中有多个类型的属性，则可以在任意属性中使用联合属性
// 一旦定义了任意属性，那么确定属性和可选属性的类型都必须是他的类型的子集
interface Person3 {
    name: string;
    age?: number;
    // [propName: string]: string;//报错，任意属性的值允许的是string，但是可选属性age的值确实number，number不是string的子属性，所以报错
}


// 只读属性
// 对象中的一些字段只能在创建的时候被赋值，那么可以用readonly定义只读属性
interface Person4 {
    readonly id: number;
    name: string;
    age?: number;
    [propName: string]: any;
}
let tom4: Person4 = {
    id: 666,
    name: 'tom',
    age: 23,
    gender: 'male'
}
//tom.id = 777; //报错，id是只读属性，对象初始化后又被重新赋值，所以报错
//********注意，只读属性约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候 */
