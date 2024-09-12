var obj1 = {
    a: 1,
    b: 2,
    c: 3,
    d: 'apple',
  };
  
  // const obj1entries = Object.entries(obj1);
  // console.log(obj1entries);
  
  Object.prototype.myEntries = function(obj) {
      if (obj === null || typeof obj !== 'object') {
        throw new Error('Argument must be the object, or null');
      }
  
      const entires = [];
  
      for(const prop in obj) {
          if(Object.hasOwnProperty.call(obj, prop)) {
              entires.push([prop, obj[prop]]);
          }
      }
  
      return entires;
  }
  
  const obj1entries = Object.myEntries(obj1);
  console.log(obj1entries);