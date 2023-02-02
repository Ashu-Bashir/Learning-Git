
// Questions asked in evaluation 1 by Naresh Sir!!!


// About Closure
function outer(){
    let a = 10;
    function inner(){
        console.log(a)
    }

    inner()

    console.log(a)
}

const ans22 = outer() // 10
console.log(ans22 , "kk")


// About type conversions
let num1 = "3" ;
let retAns = Number(num1)
console.log(retAns)










// UNARY OPERATOR

const anum = "1";
const anum1 = +anum;
console.log(typeof(anum1) , "ashhh");




// (this) with a constructor function starts
function Person(firstName, lastName) {
    console.log(this);
    this.firstName = firstName;
    console.log(this);
    this.lastName = lastName;
    console.log(this);
    
    // return this;
  }
  
  const person = new Person("Jane", "Doe");



// (this) with a constructor function ends




  // (this) with an arrow function starts
const outerThis = this;
console.log(outerThis);

const func = () => {
    console.log(this , "inner");
    console.log(this === outerThis); // always true bz no method can change the value of this in arrow fxn
};

func();
func.call(null);
func.apply(undefined);
func.bind({})();

  // (this) with an arrow function ends




