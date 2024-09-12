var obj1 = {
    a: 1,
    b: 2,
    c: 3,
    d: 'apple',
  };
  
  // const newObj = Object.assign({}, obj1)
  // newObj.a = 10;
  // console.log(obj1);
  // console.log(newObj);
  
  Object.prototype.myAssign = function(target, ...sources) {
      if (target === null || typeof target!== 'object') {
        throw new Error('Argument must be the object, or null');
      }
      
      console.log(target);
      console.log(sources);
  
      sources.forEach((source) => {
          Object.keys(source).forEach((srcKey) => {
              if(Object.hasOwnProperty.call(source, srcKey)) {
                  target[srcKey] = source[srcKey];
              }
          })
      })
  
      return target;
  }
  
  const newObj = Object.myAssign({}, obj1)
  newObj.a = 10;
  console.log(obj1);
  console.log(newObj);