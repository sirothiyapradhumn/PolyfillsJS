var obj1 = {
    a: 1,
    b: 2,
    c: 3,
    d: 'apple',
  };
  
  // const obj1keys = Object.keys(obj1);
  // console.log(obj1keys);
  
  Object.prototype.myKeys = function(obj) {
      if (obj === null || typeof obj !== 'object') {
        throw new Error('Argument must be the object, or null');
      }
  
      const keys = [];
  
      for(const prop in obj) {
          if(Object.hasOwnProperty.call(obj, prop)) {
              keys.push(prop);
          }
      }
  
      return keys;
  }
  
  const obj1keys = Object.myKeys(obj1);
  console.log(obj1keys);