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
    return initialDeltaObject;
  }
};

const makeFiboGenerator = function(providedNumber) {
  let num1 = -providedNumber;
  let num2 = providedNumber;
  if(!providedNumber) {
    num1 = -1;
    num2 = 1;
  }
  return function() {
    let currentFiboNumber = num1 + num2;
    num1 = num2;
    num2 = currentFiboNumber;
    return currentFiboNumber;
  }
};
const makeCycler = undefined;
const curry = undefined;
const compose = undefined;

exports.makeConstant=makeConstant;
exports.makeCounterFromZero=makeCounterFromZero;
exports.makeCounterFromN=makeCounterFromN;
exports.makeDeltaTracker=makeDeltaTracker;
exports.makeFiboGenerator=makeFiboGenerator;
exports.makeCycler=makeCycler;
exports.curry=curry;
exports.compose=compose;
