// 类型断言


// 类型断言可以用来手动指定一个值的类型
// 语法：
// 1.  值  as  类型   推荐使用该语法，在tsx语法中必须使用该语法
// 2.  <类型>值

// 类型断言的用途：
// 1.将一个联合类型断言为其中一个类型
// 当TS不能确定一个联合类型的变量到底是哪个类型的时候，只能访问此联合类型的所有类型中共有的属性或方法
// 而有时候我们确实需要在还不确定类型的时候就访问其中一个类型特有的属性或方法，就可以使用类型断言
interface Cat {
    name: string;
    run(): void;
}
interface Fish {
    name: string;
    swim(): void;
}
function isFish(animal: Cat | Fish) {
    // 这里将animal断言为Fish,animal.swim方法才不会报错
    if (typeof (animal as Fish).swim === 'function') {
        return true;
    }
    return false;
}

function swim(animal: Cat | Fish) {
    typeof (animal as Fish).swim
}
let tom3: Cat = {
    name: 'tom',
    run() {
        console.log("run run run")
    }
}
swim(tom3);//这里编译不会报错，但是运行会报错，因为Cat接口声明的变量没有swim方法
// 要谨慎使用类型断言，尽量避免断言后调用方法或引用深层属性，以减少不必要的运行时的错误

// 2.将一个父类断言为更加具体的子类
class ApiError extends Error {
    code: number = 0;
}
class HttpError extends Error {
    statusCode: number = 200;
}
function isApiError(error: Error) {
    if (typeof (error as ApiError).code === 'number') {
        return true;
    }
    //这里有一个更适合的判断方法判断是不是apierror,那就是使用instanceof
    if (error instanceof ApiError) {
        return true;
    }
    // 但有的情况下，apierror和httperror不是一个真正的类，而知一个TS接口，接口是一个类型，不是一个真正的值，
    // 他在编译结果中会被删除，当然就无法使用instanceof来做运行时判断了，此时就只能用类型断言
    return false;
}


// 3.将任何一个类型断言为any




