// 任意值

// 任意值（Any）用来标志允许赋值为任意类型

// 如果是一个普通类型，在夫妇只过程中改变类型是不被允许的，
// 但如果是any类型，则允许呗赋值为任意类型
let myFavoriteNumber: any = 'seven';
myFavoriteNumber = 7;

// 在任意值上访问任何属性都是允许的，也允许调用任何方法。
// 可以认为：声明一个变量为任意值之后，对他的任何操作，返回的内容的类型都是任意值
let anything :any = 'hello';
console.log(anything.myName)
anything.setName('jeery');

// 变量如果在声明的时候，未指定其类型，那么他会被识别为任意类型
let something;          //------>let  something:any;
something = 'seven';
something = 7;
something.setName('tom');

