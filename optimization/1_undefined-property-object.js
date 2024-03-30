let user = { 
    name: "John"
  };

// it's forbidden to do that
console.log(user.age) // undefined

// it's  allowed to do that
user.age = null
console.log(user.age) // null