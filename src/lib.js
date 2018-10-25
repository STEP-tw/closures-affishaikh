const makeConstant = function(providedElement) {
  return function() {
    const constantElement = providedElement;
    return constantElement;
  }
};

const makeCounterFromN = function(startingCount) {
  return function() {
    return startingCount++;
  }
};

const makeCounterFromZero = function() {
  let startingCount = 0;
  return function() {
    return startingCount++;
  }
};

const makeDeltaTracker = function(initialDeltaValue) {
  let initialDeltaObject = { old : 0, delta : initialDeltaValue, new : initialDeltaValue};
  return function(deltaValue) {
    if(!deltaValue) { deltaValue = 0; }
    initialDeltaObject.old = initialDeltaObject.new;
    initialDeltaObject.delta = deltaValue; 
    initialDeltaObject.new = initialDeltaObject.old + initialDeltaObject.delta;
    deltaObject = Object.assign({}, initialDeltaObject);
    return deltaObject;
  }
};

const makeFiboGenerator = function(providedNumberOne, providedNumberTwo) {
  let num1 = -providedNumberOne;
  let num2 = providedNumberOne;
  if(!providedNumberOne) {
    num1 = -1;
    num2 = 1;
  }
  if(providedNumberTwo) {
    let count = 1;
    let num1 = providedNumberOne;
    let num2 = providedNumberTwo;
    return function() {
      if(count == 1) {
        count++;
        return (num1 + 0);
      }
      if(count == 2) {
        count++;
        return (num2 + 0);
      }
      let currentFiboNumber = num1 + num2;
      num1 = num2;
      num2 = currentFiboNumber;
      return currentFiboNumber;
    }
  }
  return function() {
    let currentFiboNumber = num1 + num2;
    num1 = num2;
    num2 = currentFiboNumber;
    return currentFiboNumber;
  }
};

const makeCycler = function(elementsToBeCycled) {
  let index = 0;
  let initialElementsToBeCycled = [].concat(elementsToBeCycled); 
  return function() {
    let elementIndex = index%initialElementsToBeCycled.length;
    index++;
    return initialElementsToBeCycled[elementIndex];
  }
};

const curry = function(func, initialValue) {
  return function(lowerLimit, upperLimit) {
    return func(initialValue, lowerLimit, upperLimit);  
  }
};

const compose = function(func1, func2) {
   return function(collection1, collection2) {
    let lengthOfCollection = func2(collection1, collection2); 
    return func1(lengthOfCollection);
  }
};

exports.makeConstant=makeConstant;
exports.makeCounterFromZero=makeCounterFromZero;
exports.makeCounterFromN=makeCounterFromN;
exports.makeDeltaTracker=makeDeltaTracker;
exports.makeFiboGenerator=makeFiboGenerator;
exports.makeCycler=makeCycler;
exports.curry=curry;
exports.compose=compose;
