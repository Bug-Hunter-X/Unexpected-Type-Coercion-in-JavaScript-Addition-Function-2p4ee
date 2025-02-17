function foo(a,b){
if(typeof a !== 'number' || typeof b !== 'number'){
  return "Error: Inputs must be numbers";
}
return a+b;}
console.log(foo(2,3));//This will return 5
console.log(foo(2,"3"));//This will return Error: Inputs must be numbers
console.log(foo(2,[3]));//This will return Error: Inputs must be numbers
console.log(foo([2],3));//This will return Error: Inputs must be numbers 