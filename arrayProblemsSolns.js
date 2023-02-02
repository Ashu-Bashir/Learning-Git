

// OLD METHOD STARTS for sequence problem
const array = [1, 2, 5, 6, 7, 3];
const sequenceArr = [1, 6, 7 ];

function isValidSequence(array , sequence){
    let index = 0;
    for (let i = 0; i < array.length; i++) {
       console.log(sequence[index])
        if (sequence[index]=== array[i]) {
        index++
       }

    }

    return sequence.length === index;
}

const ans = isValidSequence(array, sequenceArr);
console.log(ans)

//OLD METHOD ENDS for sequence problem



// NEW REDUCE METHOD STARTS for sequence
const inputArr = [1, 2, 5, 6, 7, 3];
const seq = [1, 6, 7 ];
const sumWithInitial = inputArr.reduce((acc, currentValue, currentIndex, array) => {
    if (seq[acc] === currentValue) {
      acc += 1;
    }
    if (currentIndex === inputArr.length - 1) {
      acc = acc == seq.length ? true : false;
    }

    return acc;
  },0);

console.log(sumWithInitial);

// NEW REDUCE METHOD ENDS for sequence



// Anotehr soln for sequence prob starts

const inputArr1 = [1, 2, 5, 6, 7, 3];
const seq1 = [1, 2, 7];

function isValidSubsequence(inputArr, seq) {
  const subSeq = [];
  for (const item of inputArr) {
    if (seq.includes(item)) {
      subSeq.push(item);
    }
  }

  return seq.every((el, index) => el === subSeq[index]);
}

console.log(isValidSubsequence(inputArr1, seq1), " hello ashu");

// Anotehr soln for sequence prob ends







//  NEW CODE FOR SEQUENCE USING JUST EVERY STARTS and this is the optimal one as said by MR. SYED :)

const isSubseq = (inpArr, seq) => {
    let preIndex;
   let result =  seq.every((el, curIndex) => {
    curIndex = inpArr.indexOf(el)
    console.log(curIndex , "c");
    preIndex = preIndex? preIndex:curIndex;
    console.log(preIndex, "p");
  
    return curIndex>=preIndex&& curIndex>=0
    
  
     });
     return result
  
  };
  
  const inputArray = [1, 2, 5, 6, 7, 3];
  const sequence = [2,6,3];
  
  console.log(isSubseq(inputArray, sequence) , " seq. ans");
  
  //  NEW CODE FOR SEQUENCE USING JUST EVERY ENDS and this is the optimal one as said by MR. SYED :)






// <!-----------------------------------------------------------------------------------!>






// ARRAY OF OBJECTS PROBLEM STARTS NOT OPTIMAL


const input1 = [
    {personA: 'A', garbage: 'asldkfj'},
    {personB: 'B', garbage: 'asldkfj'},
    {personC: 'C', garbage: 'asldkfj'},
    {personD: 'D', garbage: 'asldkfj'},
    {personE: 'E', garbage: 'asldkfj'},
    {personF: 'F', garbage: 'asldkfj'},
    {personG: 'G', garbage: 'asldkfj'}
  ];

  input1.forEach(function(obj){
    delete obj.garbage;
    
  })
const output = input1
//   const output = JSON.parse(JSON.stringify(input))
// const output = JSON.stringify(input)
console.log(output)

const newObj = Object.assign({}, ...output );
console.log(newObj );


// ARRAY OF OBJECTS PROBLEM ENDS NOT OPTIMAL

  // ARRAY OF OBJECTS PROBLEM STARTS ACCEPTED BY MR. SYED!!!!

const input = [
    { personA: "A", garbage: "asldkfj" },
    { personB: "B", garbage: "asldkfj" },
    { personC: "C", garbage: "asldkfj" },
    { personD: "D", garbage: "asldkfj" },
    { personE: "E", garbage: "asldkfj" },
    { personF: "F", garbage: "asldkfj" },
    { personG: "G", garbage: "asldkfj" },
  ];
  
  // output : {
  //   personA : 'A',
  //   personB : 'B',
  //   personC : 'A',
  //   personD : 'A',
  //   personE : 'A',
  //   personF : 'A',
  //   personG: 'A',
  
  // }
  
  function reduced(input) {
    return input.reduce((acc, item) => {
      const { garbage, ...rest } = item;
  
      return { ...acc, ...rest };
    }, {});
  }
  console.log(reduced(input), " ASHU's ANSWER");

  // ARRAY OF OBJECTS PROBLEM ENDS ACCEPTED BY MR. SYED!!!!
