// The Module Pattern - engine module 


var engine = (function() {
  var gasPrice = 5; // RON

  var litersNumber = function(distance, economy) {
    return liters = Math.ceil((economy * distance) / 100);
  };

  var autonomy = function(liters, economy) {
    var distance = Math.ceil((liters * 100) / economy);

    return distance + ' km';
  };

  var economy = function(distance, liters) {
    // get only the firtst digit after the decimal point
    var economy = Math.round(((liters * 100) / distance) * 10) / 10;
    return economy + ' %';
  };

  var liters = function(distance, economy) {
    var liters = Math.ceil((economy * distance) / 100);
    return liters + ' liters';
  };

  var trip = function(distance, economy) {
    var l = null,
      stringBuild = null,
      totalPrice = null;

    // private methods and variables are accessible inside public functions
    l = litersNumber(distance, economy);
    totalPrice = l * gasPrice;

    stringBuild = ['Your trip of ',
      distance,
      ' km with a fuel economy of ',
      economy,
      '% will cost you ',
      l * gasPrice,
      ' RON'
    ].join('');

    return stringBuild;
  };

  // only variables and methods that are returned are made public;
  // all other are not accesible from the outside of this module
  return {
    // they can be accessed from outside by the name specified on the left
    'trip': trip,
    'calcAutonomy': autonomy,
    'calcFuelEconomy': economy,
    'calcFuelUsed': liters
  };
})();


// extend the module

var engineExtension = (function(engine) {

  engine.model = function() {
    return 'M52 6 cylinder';
  };

  return engine;

})(engine || {});





/****************************** other examples ******************************/

var module = (function() {
  var time = new Date();

  var info = {};

  var getUserAgent = function() {
    return navigator.userAgent;
  };

  info.showTime = function() {    
    return time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
  };

  info.showDisplaySize = function() {
    var width = screen.width,
      height = screen.height;

    return 'Resolution: ' + width + ' x ' + height;
  };

  return info;
})();


module.showTime();         // works
module.showDisplaySize();  // works
module.time;               // undefined


/*
  function calculator() {
    
    var engine = {};

    engine.autonomy = function(liters, economy) {
      var distance = (liters * 100) / economy;

      return distance + ' km';
    },

    engine.economy = function(distance, liters) {
      var economy = (liters * 100) / distance;
      return economy + ' %';
    }

    engine.liters = function(distance, economy) {
      var liters = (economy * distance) / 100;
      return liters + ' liters';
    }

    return engine;
  }

  var calc = calculator();
  calc.autonomy(20, 10);
  calc.economy(300, 10);
*/
