// Solution no. 1 starts

  const printSqMatr = (n) => {
    const lastDigit = n * n;
    // const arr =Array.from({ length: lastDigit }, (_, i) => i )
    const arr = Array.from(Array(lastDigit), (_, i) => i + 1);

    arr.forEach((_, i) =>
      console.log(arr.slice(i * n, i * n + n).join(" "))
    );
  };
  printSqMatr(3);

// Solution no. 1 ends




// Solution no. 2 starts
const printSqMat = (n) => {
    const lastDigit = n * n;
    const arr = Array.from(Array(lastDigit).keys());
    console.log(arr, " arr");
    arr.forEach((i) => console.log(arr.slice(i * n, i * n + n).join(" ")));
  };
  const ans = printSqMat(3);
  console.log(ans, "print sq. matrix ashu");

// Solution no. 2 ends




// Using Recursion Starts
function printNums(initial, last)
          {
              let output = "";
              if (initial <= last) {
                  output += initial+ " " +printNums(initial + 1, last);
                   }
              return output
          }

function printSquareMatrix(n){
        let output = "";
        let ini  = 0;
        let last = n-1;
        for (i=0;i<=(n)-1;i++){
            output += printNums(ini,last) +"\n" 
            ini = last+1
            last = last + n
          }
    return output;
    }
      
  let returnedVal = printSquareMatrix(4);
  console.log(returnedVal);
// Using Recursion Ends



// Another soln starts
const printSqMatrix = n =>{
    let startIndex= 0;
    let lastIndex = n;
    const res = [];
    const arr = [];
    const sq = n*n
    for (let i = 0; i < sq; i++) {
       arr.push(i);
        
    }

    for (let i = 0; i < n; i++) {
        res.push(arr.slice(startIndex , lastIndex));
        startIndex += n;
        lastIndex += n;        
    }


const strArray = res.map(i=>String(i).replaceAll(",", " "));
const final = String(strArray).replaceAll("," , "\n")
return final
}

console.log(printSqMatrix(4));

// Another soln ends




// a soln but not fully, it is present in arrays starts
function createMatrix(len){
    var result = [];
    for (var i=0; i<len; i++){
      result.push(new Array(len).fill(i).map(function(item, index){
         return item *len + index }));
    }
    return result;
  }
  console.log(createMatrix(3))

// a soln but not fully, it is present in arrays ends




// Another soln, but it prints line by line starts

function printSequenceMat(n) {
  let output = "";
  let sqaure = n*n
  for (let i = 0; i < sqaure; i++) {
    output += i + " ";
    if ((i + 1) % n === 0) {
      console.log(output);
      output = "";
    }
  }
}
printSequenceMat(4)

// Another soln, but it prints line by line ends




// Another soln with array and string methods starts

function printSquareMatrix(n) {
    let matrix = Array(n).fill().map((_, i) =>
    Array(n).fill().map((_, j) => n * i + j));

    return matrix.map(row => row.join(" ")).join("\n");
  }
   let result = printSquareMatrix(4);
  console.log(result , "soln");

// Another soln with array and string methods ends




  // CORRECT SOLN USING REGEX AYSHA STARTS, NOT AT ALL OPTIMAL AND ALSO COMPLEX . IT HAS COMPLEXITY OF O(n^2 + 5n )

  const aSquareMatrix = (n) => {
    const lastDigit = n * n;

    var arr1 = Array.from({ length: lastDigit }, (v, i, k) => i).toString();

    let result = arr1
      .match(/(?:[^,]+(?:,|$)){1,3}/g)
      .toString()
      .split(",")
      .join(" ")
      .replace(/  +/g, " \n");

    console.log(result);
  };
  console.log(aSquareMatrix(3), "aysha");

  // CORRECT SOLN USING REGEX AYSHA ENDS,  NOT AT ALL OPTIMAL AND ALSO COMPLEX . IT HAS COMPLEXITY OF O(n^2 + 5n )




   // OPTIMAL THAN REGEX BUT NOT FULLY OPTIMAL STARTS . IT HAS O(n^2)

   const printSqMatrixx = (n) => {
    Array.from({ length: n }, (_, i) =>
      console.log(Array.from({ length: n }, (_,j) =>j+i*n).join("\t"))
    );
  };
  printSqMatrixx(4);

    // OPTIMAL THAN REGEX BUT NOT FULLY OPTIMAL ENDS . IT HAS O(n^2)




// OPTIMAL SOLUTION STARTS ACCEPTED BY SYED!!!

function printSequence(n) {
    let output = "";
    let sqaure = n * n;
    for (let i = 0; i < sqaure; i++) {
      output += i + " \t";
      if ((i + 1) % n === 0) {
        output += "\n";
      }
    }
    console.log(output);
  }
  
  printSequence(8);

  
// OPTIMAL SOLUTION ACCEPTED BY SYED ENDS.


