// 联合类型

//联合类型表示取值可以为多种类型中的一种
let myFavoriteNumber4: string | number;
myFavoriteNumber4 = 'seven';
myFavoriteNumber4 = 7;
// 联合类型用 | 分隔每个类型

// 访问联合类型的属性或方法
// 当TS不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问次联合类型的所有类型里共有的属性或方法
// function getLength(something: string | number): number {
//     return something.length;  //报错，length是string的方法，number没有该方法
// }

function getLength(something: string | number): string {
    return something.toString();  //该方法是string和number共有属性
}
// 联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型
let myFavoriteNumber5:string|number;
myFavoriteNumber5 = 'seven';
console.log(myFavoriteNumber5.length);//正确，此时myFavoriteNumber5的类型推论为string
myFavoriteNumber5 = 7;
//console.log(myFavoriteNumber5.length);//错误，此时myFavoriteNumber5的类型推论为number，number没有该属性

