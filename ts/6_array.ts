// 数组的类型

// [类型+方括号]表示法
let fibonacci: number[] = [1, 1, 2, 3, 5];//元素为number类型的数组，不允许出现其他类型
//数组的一些方法的参数也会根据数组在定义时约定的类型进行限制
// fibonacci.push('8');//报错，fibonacci的push方法只允许传入number类型的参数，这里确传入了一个‘8’
// 类型的参数，所以报错


// 数组泛型
let fibonacci1: Array<number> = [1, 1, 2, 3, 5];

//用接口表示数组
interface NumberArray {
    [index: number]: number;
}
let fibonacci2: NumberArray = [1, 1, 2, 3, 5];
// NumberArray表示：只要索引的类型是数字时，那么值的类型必须是数字

// 类数组
// 类数组不是数组类型，比如arguments
function sum() {
    // let args: number[] = arguments;
    // Type 'IArguments' is missing the following properties from type 'number[]': 
    // pop, push, concat, join, and 24 more.
    //arguments是一个类数组，不能用普通数组的方式描述，应该用接口
    let args: {
        [index: number]: number;
        length: number;
        callee: Function;
    } = arguments;
    //约束了当索引的类型是数字时，值类型必须是数字之外，也约束了它还有length和callee两个属性
}


// any在数组中的应用
let list:any[]=[1,'3',{website:'http://baidu.com'}];
//用any表示数组中允许出现任意类型
