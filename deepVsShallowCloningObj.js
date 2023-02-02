const arr = [1, 2, 3, { name: "mukesh" }];

const answer = arr.map((v) => {
  if (v.constructor.name === "Number") {
    return v * 2;
  }
   else if (v.constructor.name === "Object") {
    //  const deepClone= JSON.parse(JSON.stringify(v));
    const shallowCopy = { ...v };

    const objKey = Object.getOwnPropertyNames(v);

    const firstKey = objKey[0];
    shallowCopy[firstKey] = "suresh";
    return shallowCopy;
  }
});