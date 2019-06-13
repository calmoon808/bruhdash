var global = window || GLOBAL;

/****************************************************************************************
 * Function signatures have been intentionally left out of the comments describing what *
 * each function does so that you can have practice looking up documentation. Please    *
 * Reference the documentation at [ https://lodash.com/docs/4.17.4 ] You should have    *
 * documentation up in a browser window at all times when working on projects!          *
 ****************************************************************************************/

global.bruhdash = {

  // returns the first element of an array
  first: function (arr) {
    return arr[0];
  },

  // returns the last element of an array
  last: function (arr) {
    return arr[arr.length - 1];
  },

  // returns the index of the first matching element from left to right
  indexOf: function (arr, char) {
    return arr.indexOf(char);
  },

  // returns the index of the first matching element from right to left
  lastIndexOf: function (arr, char) {
    return arr.lastIndexOf(char);
  },

  // returns an array with all elements except for the last element
  initial: function (arr) {
    arr.pop();
    return arr;
  },
  
  // returns an array with all falsey values removed
  compact: function(arr) {
    let trueArr = []
    for(let i = 0; i < arr.length; i++){
      if(arr[i] !== false && arr[i] !== 0 && arr[i] !== '' && arr[i] !== null && arr[i] !== undefined && !Number.isNaN(arr[i])){
        trueArr.push(arr[i]);
      }
    }
    return trueArr;
  },

  // creates a slice of an array from the start index up to but not including the end index
  slice: function (arr, start) {
    return arr.slice(start, arr.length - 1);
  },

  // returns a slice of array with n elements dropped from the beignning
  drop: function(arr, n){
    if(n === 0){
      return arr;
    } else if (!n){
      return arr.slice(1);
    } else {
      return arr.slice(n)
    }
  },

  // returns a slice of array with n elements dropped from the end
  dropRight: function(arr, n) {
    if (n === 0){
        return arr;
    } else if(!n){
        return arr.slice(0, -1);
    } else {
        return arr.slice(0, -n);
    }
  },

  // creates a slice of an array with n elements taken from the beginning
  take: function (arr, n) {
    if(n === 0){
      return [];
    }else if(!n){
      return arr.slice(0, 1);
    } 
    return arr.slice(0, n);
  },

  // creates a slice of an array with n elements taken from the end
  takeRight: function (arr, n) {
    if(n === 0){
      return [];
    } else if(!n){
      return arr.slice(arr.length - 1)
    } else {
      return arr.slice(-n);
    }
  },

  // fills elements of array with specified value from the start index
  // up to but not including the end index
  fill: function (arr, value, strIndx, endIndx) {
    let n = arr.length;
    if(!strIndx && !endIndx){
      for(let i = 0; i < n; i++){
        arr[i] = value;
      }
      return arr;
    } else {
      arr.splice(strIndx, endIndx - strIndx);
      while(arr.length !== n){
        arr.splice(strIndx, 0, value);
      }
      return arr;
    }
  },

  // removes all given values from an array
  pull: function (arr, value, value2) {
    for(let i = 0, n = arr.length; i < n; i++){
      if(arr[i] === value || arr[i] === value2){
        arr.splice(i, 1);
        i--;
      }
    }
    return arr;
  },

  // removes elements of an array corresponding to the given indices
  pullAt: function (arr, valueArr) {
    let newArr = [];
    for(let i = 0, n = arr.length; i < n; i++){
      //tried to make sure function covers more than 2 indices
      for(let j = 0, n = valueArr.length; j < n; j++){
        if(i === valueArr[j]){
          newArr.push(arr[i]);
        }
      }
    }
    for(let i = 0, n = valueArr.length; i < n; i++){
        arr.splice(valueArr[i], 1);
    }
    return newArr;
  },

  // creates an array excluding all the specified values
  without: function(arr, value, value2) {
    let newArr = [];
    for(let i of arr){
      if (i !== value && i !== value2){
        newArr.push(i);
      }
    }
    return newArr;
  },

  // returns an array with specified values excluded
  difference: function(arr1, arr2) {
    let newArr = [];
    for(let i = 0, n = arr1.length; i < n; i++){
      if(!(arr2.includes(arr1[i]))){
        newArr.push(arr1[i]);
      }
    }
    return newArr;
  },

  /*******************
   *  STRETCH GOALS! *
   *******************/ 

  // creates an array of grouped elements
  zip: function (arr1, arr2) {
    let newArr =[];
    for(let i = 0, n = arr1.length; i < n; i++){
      let zipArr = [];
      zipArr.push(arr1[i], arr2[i]);
      newArr.push(zipArr);
    }
    return newArr;
  },

  // creates an array of grouped elements in their pre-zip configuration
  unzip: function (arr) {
    let newArr = [];
    let arr1 = [];
    let arr2 = [];
    for(let i = 0, n = arr.length; i < n; i++){
      arr1.push(arr[i][0]);
      arr2.push(arr[i][1]);
    }
    newArr.push(arr1, arr2);
    return newArr;
  },

  // creates an array of elements into groups of length of specified size
  chunk: function(arr, num){
    let newArr = [];
    if(num, arr){
      for(let i = 0, n = arr.length; i < n + n % num - 1; i += num){
        newArr.push(arr.slice(i, i + num));
      }
      return newArr
    }else if(arr.length === 0 || !n){
      return newArr;
    } else if(n === arr.length || n > arr.length){
      newArr.push(arr);
      return newArr;
    }
  },

  // iterates over elements of a collection and invokes iteratee for each element
  // Note: this should work for arrays and objects
  forEach: function(thing, func) {
    for(let key in thing){
      func(thing[key]);
    }
  },
 
  // creates an array of values by running each element in collection thru the iteratee
  // Note: this should work for arrays and objects
  map: function(thing, func) {
    for(let key in thing){
      thing[key] = func(thing[key]);
    }
    return Object.values(thing);
  },

  /*************************
   *  SUPER STRETCH GOALS!  *
   *************************/ 

  // iterates over elements of a collection and returns all elements that the predicate returns truthy for
  // Note: this should work for arrays and objects
  filter: function(thing, func) {
    let newArr = [];
    for(let key in thing){
      if(func(thing[key])){
        newArr.push(thing[key]);
      }
    }
    return newArr;
  },

  // Reduces the collection to a value which is the accumulated result of running each element
  // in the collection through an iteratee
  // Note: this should work for arrays and objects
  reduce: function(thing, func) {
    let result = 0;
    for(let key in thing){
      result = func(answer, thing[key]);
    }
    return result;
  }
};