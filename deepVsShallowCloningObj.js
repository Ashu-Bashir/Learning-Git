const arr = [1, 2, 3, { name: "mukesh" }];

const answer = arr.map((v) => {
    if (v.constructor.name === "Number") {
        return v * 2;
      }
       else if (v.constructor.name === "Object") {
        //  const deepClone= JSON.parse(JSON.stringify(v));
        const shallowCopy = { ...v }; // shallow cloning,. use destructuring using rest operator
    
        const objKey = Object.getOwnPropertyNames(v);
    
        const firstKey = objKey[0];
        shallowCopy[firstKey] = "suresh";
        return shallowCopy;
      }
    });

      const obj = { age:20, name: {realname : "mukesh"}};

      const deepCopy = JSON.parse(JSON.stringify(obj));
      // const shallowCopy = {...obj};

      deepCopy.name = 25;
      deepCopy.age.realname = "suresh";
      console.log(" a" , obj);
      console.log( "d", deepCopy);