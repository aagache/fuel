// Static namespacing
// 1. By Direct assignment

var app = app || {};

app.getLanguage = function() {
  return navigator.language;
};

app.getPi = function() {
  // or Math.PI
  return pi;
}



// 2. Object Literal Notation

var car = car || {};

car.getMake = function() {
  return this.make;
}


var appObj = {
  getUserAgent: function() {
    return navigator.userAgent;
  },

  showTime: function() {
    var time = new Date();
    
    return time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
  },

  showDisplaySize: function() {
    var width = screen.width,
      height = screen.height;

    return 'Resolution: ' + width + ' x ' + height;
  }

};