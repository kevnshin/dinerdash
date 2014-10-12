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

  //Skipped createCallback


  //Escape: turns '&', '<', '>', ''', '"' into html elements
  escape: function (string) {

    switch (string) {

      case "&":
        return "&amp;";
        break;

      case "<":
        return "&lt;";
        break;

      case ">":
        return "&gt;";
        break;

      case "\"":
        return "&quot;";
        break;

      case "\'":
        return "&#39;";
        break;

      default:
        return string;

    }

  },



  identity: function (value) {

    return value;

  },


  //skipped mixins

  //no operation function --> do nothing
  noop: function() {


  },














};


