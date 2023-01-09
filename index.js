const receivesAFunction = (callback) => {
  return callback();
};

const returnsANamedFunction = () => {
  return receivesAFunction;
};

const returnsAnAnonymousFunction = () => {
  return function () {
    return "hello";
  };
};
