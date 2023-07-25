// Query
// Write a function called contains that searches for a value in a nested object. It returns true if the object contains
// that value.

function contains(obj, value) {
  if (obj === null || typeof obj !== "object") {
    return false;
  }

  if (Object.values(obj).includes(value)) {
    return true;
  }

  //Recursion

  for (const key in obj) {
    if (contains(obj[key], value)) {
      return true;
    }
  }

  return false;
}

//Sample Object

var nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: "foo2",
          },
        },
      },
    },
  },
};

console.log(contains(nestedObject,'foo2')) //true
console.log(contains(nestedObject,'foo3')) //false