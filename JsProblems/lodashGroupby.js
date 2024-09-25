const students = [
    {
      name: "Alice",
      age: 22,
      grade: "A"
    },
    {
      name: "Bob",
      age: 23,
      grade: "B"
    },
    {
      name: "John",
      age: 20,
      grade: "B"
    },
    {
      name: "Charlie",
      age: 21,
      grade: "A"
    }
  ];
  
  // customGroupBy(students, (stud) => stud.grade);
  
  Object.customGroupBy = function(arr, cbFn) {
      const result = {};
      
      arr.forEach((item) => {
          const key = cbFn(item);
          if(key in result) {
              result[key] = [...result[key], item];
          } else {
              result[key] = [item];
          }
          
      });
  
      return result;
  }
  
  const test = Object.customGroupBy(students, (stud) => stud.grade);
  
  console.log(test);