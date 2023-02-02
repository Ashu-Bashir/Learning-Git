 // ERROR HAND STARTS Q1
 
 function kill(a){
      if(a===1){
          throw new SyntaxError("cant enter 1")
      }

  }
      try{
        kill(1)
        console.log("hello ashu")
      }
      catch(e){
          console.log(e);
        console.log("hello ashya")

      }
      finally{
          console.log("ok")
      }


 // ERROR HAND ENDS Q1



 // Q2 STARTS

           function f() {
              try {
                  throw 'bogus';
              } catch (e) {
                  console.log('caught inner "bogus"');
                  throw e; // this throw statement is suspended until
                  // finally block has completed
              } finally {
                  return false; // overwrites the previous "throw"
              }
              // "return false" is executed now
          }

          try {
              console.log(f());
          } catch (e) {
              // this is never reached!
              // while f() executes, the `finally` block returns false,
              // which overwrites the `throw` inside the above `catch`
              console.log('caught outer "bogus"');
          }

          // Logs:
          // caught inner "bogus"
          // false

// Q2 ENDS


