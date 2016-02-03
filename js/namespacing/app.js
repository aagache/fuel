// Static namespacing
// 1. By Direct Assignment

var app = app || {};
var pi = 3.1415;

app.getUserAgent = function() {
  return navigator.userAgent;
};

app.showTime = function() {
  var time = new Date();
  
  return time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
};

app.showDisplaySize = function() {
  var width = screen.width,
    height = screen.height;

  return 'Resolution: ' + width + ' x ' + height;
};




// 2. Object Literal Notation

var car = car || {};

var car = {
  color: 'silver',
  cc: '2.5',
  make: 'Volkswagen',

  details: function() {
    return 'This is a ' + this.cc + 'l ' + this.color + ' ' + this.make;
  },

  getCC: function() {
    return this.cc;
  },

  getColor: function() {
    return this.color;
  }
};


// With an argument

var myApp = myApp || {};

(function(context) {
  var id = 0;

  context.next = function() {
    return id++;    
  };

  context.reset = function() {
    id = 0;     
  }
})(myApp);

myApp.prev = function() {
  return id--;
}

myApp.current = function() {
  return id;
}