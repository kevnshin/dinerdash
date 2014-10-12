module.exports = {

  

  //Utilities

  now: function () {
    //return number of milliseconds since Jan 1, 1970 midnight
    return new Date().getTime();

  },

  constant: function (value) {

    //return the value(s) as a function
    return function () {
        return value;
      };

  },


   















};


