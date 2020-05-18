// 类型推论

// 如果没有明确的指定类型，那么TS会依照类型推论的规则推断出一个类型
let myFavoriteNumber2 = 'seven';//这里没有明确指定类型，但是根据赋值可以推论出该变量的类型为string
// myFavoriteNumber2 = 7;//给string类型的变量赋值number,报错

// 如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成any类型而完全不会被类类型检查
let myFavoriteNumber3;    //---------->let myFavoriteNumber3:any;
myFavoriteNumber3 = 'seven';
myFavoriteNumber3 = 7;
