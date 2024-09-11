function introduce(name, age) {
    console.log(`Hi, I am ${name}, ${age} years old from ${this.city}.`);
  }
  
  const person = {
    city: 'Los Angeles',
  };
  
  // introduce.apply(person, ['John', 26]);
  
  Function.prototype.myApply = function(context, args) {
      if( typeof this !== "function") {
          throw new Error(this + " it's not callable");
      }
  
      if(!Array.isArray(args)) {
          throw new Error(args + " is not a array");
      }
  
      console.log(this);
      console.log(context);
      console.log(args);
  
      context.tempFn = this;
      const result = context.tempFn(...args);
      delete context.tempFn;
      return result;
  }
  
  introduce.myApply(person,  ['John', 26]);