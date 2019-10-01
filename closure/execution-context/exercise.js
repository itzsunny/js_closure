// Create the execution context flow of the this function

var counter = (function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  };
})();

counter.value(); // will return privateCounter with value 0;
counter.increment(); // no return but privateCounter will increase by 1;
counter.increment(); // no return again but the value privateCounter will increase by 1 again and value will be 2;
counter.value(); // will return  privateCounter with value 2;
counter.decrement(); // no return but  privateCounter will decrease by 1;
counter.value(); // will return privateCounter with value 1;
