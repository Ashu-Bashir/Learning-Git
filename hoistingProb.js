// SYED UMAIR HOISTING PROBLEMS STARTS
console.log('x', foo());
function foo() {
    return 200;
}
var foo = 100;
function bar() {
    var x = 20;
    return x;
    function x() {
        return 30;
    }
}
function baz() {
    var y = 30;
    return y;
    let y;
}
// console.log(foo, bar(), baz());
console.log(foo(), bar(), baz());


function myFunc(){
  let a = 23;
  a=90;
  return a ;
}

if(myFunc){
  console.log(0 && myFunc)
  console.log(myFunc && "")

}

if(myFunc){
  console.log(1 && myFunc)
  console.log(1 && myFunc())

  console.log(myFunc && 1)

}

function hoist() {
  console.log(msg);   // // undefined
  var msg = " hi"
  return msg
}

console.log(hoist())   // //  hi



// SYED UMAIR QUESTIONS START!!!!
console.log( foo, bar)

let a = 10;
function foo(){
    a = 100;
    return a ;
    var a ;
}

function bar(){
    let a = 200;
    return a ;
    if(a){
        a= 400
    }
}

console.log(a, foo(), bar())
console.log(a)

const c = "" ;
let i=1;
// while (i%10 !== 0) {
//     console.log(i++)
// }
while (i%10 !== 0) {
    console.log(i++)
}

// SYED UMAIR QUESTIONS END

(function() {

    console.log(foo() , "ok");

    console.log(typeof foo); // function pointer
    console.log(typeof bar); // undefined

    var foo = 'hello',
        bar = function() {
            return 'world';
        };

    function foo() {
        var a = 10;
        console.log(a , " i am first a ")
        return 'hello';
    }
    console.log(foo() , "ok");

    function foo() {
        var a = 10000;
        console.log(a , " i am raha ")
        return 'hello okay';
    }

    if(1){
        function foo(){
            var a = 30;
        console.log(a , " i am first a ")

            return 200;
        }
    }
    console.log(foo() , "hello ashu ")

}());

(function foo(i) {
    if (i === 3) {
        return;
    }
    else {
        foo(++i);
    }
}(0));

console.log("hello")

(function() {

    console.log(typeof foo); // function pointer
    console.log(typeof bar); // undefined

    console.log(foo , bar , " hello ashu")
    console.log(foo() , bar , " hello ashu okay")

    var foo = 'hello',
        bar = function() {
            return 'world';
        };

    console.log(foo , bar() , " hello ashu 2")

    function foo() {
        return 'challo';
    }

    console.log(foo() , bar() , " hello ashu 3")

}());

function foo(i) {
    var a = 'hello';
    var b = function privateB() {

    };
    function c() {
        var c = 100;
        return c ;
    }
    console.log(c() , "hello with call")
    console.log(c , "hello without call")

}

foo(22);

function a(){
console.log("hello i am ashu")
}
console.log(a())
console.log(a)

var a = 100;

console.log(a)
console.log(a())

console.log("a" , afunct && a)


console.log(a,b,test)

const a = 100;
var b = 40;

function b (){
  var v = 900;
  return v
}

function test(){
  var g = 50;
  return g;
  g=55;

}

console.log(a,b,b(),test())




const ank = 10;
if(true){
  const ank = 60
}
console.log(ank);




function myFunc(){
  let a = 23;
  a=90;
  return a ;
}

if(myFunc){
  console.log(0 && myFunc)  
}

if(myFunc){
  console.log(1 && myFunc)  

}


// SYED UMAIR HOISTING PROBLEMS ENDS