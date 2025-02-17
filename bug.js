function foo(a,b){return a+b;}console.log(foo(2,3));//This will return 5
console.log(foo(2,"3"));//This will return 23, because of type coercion. This is a common error that developers may overlook.
console.log(foo(2,[3]));//This will return 23, because of type coercion. This is a common error that developers may overlook.
console.log(foo([2],3));//This will return 23, because of type coercion. This is a common error that developers may overlook. 