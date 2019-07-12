const SingletonJsWay = (() => {
  "use strict";
  let instance;

  function getInstance() {
    let randomNumber = Math.random();
    // private method
    function getRandomNumber() {
      return randomNumber;
    }

    return {
      getRandomNumber
    };
  }

  return {
    getInstance: () => {
      if (!instance) {
        instance = getInstance();
      }
      return instance;
    }
  };
})();

module.exports = SingletonJsWay;
