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
const makeCounterFromZero = undefined;
const makeDeltaTracker = undefined;
const makeFiboGenerator = undefined;
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
