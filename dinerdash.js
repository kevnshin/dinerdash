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

  //skipped noConflict

  //no operation function --> do nothing
  noop: function() {


  },

//currently only works for base 10 and 2

  parseInt: function (string, radix) {

    var number_base;

    //if user inputs a radix number
    if(typeof radix === "number"){
      number_base = radix;
    } else {//user didn't input radix
      number_base = 10;
    }

    switch (number_base) {

      case 10:
        return Number(string);
        break;

      case 2:
        var numberbase_10 = Number(string);
        var backwards = '';

        //the method to convert base 10 numbers to binary that was used is to keep
        //dividing the num by 2. If remainder 1, add 1 to a string, if remainder 0, add 0
        //then, take the backwards of that string

        while(numberbase_10>=1){

          //if dividing number by 2 has remainder 1
          if(numberbase_10%2 === 1){
            backwards += "1";
            numberbase_10 -= 1; //subtract one to keep getting whole number remainders
            numberbase_10 /= 2; //divide by 2

          } else { //dividing number by 2 is 0
            backwards += "0";
            numberbase_10 /= 2;
          }

        }

        var number_base2 = '';
        for(var i = backwards.length - 1; i>=0; i--){
          number_base2 += backwards[i];
        }


        return Number(number_base2);
        break;

      default:
        return Number(string);


    } 


  },

/* skipped property
  property: function(key) {
  },
*/

  random: function (min, max, floating) {
  /*

_.random(0, 5);
// → an integer between 0 and 5

_.random(5);
// → also an integer between 0 and 5

_.random(5, true);
// → a floating-point number between 0 and 5

_.random(1.2, 5.2);
// → a floating-point number between 1.2 and 5.2

  */

  //if no value for floating
  if(floating===null){
    floating = false;
  }

  //if no value for min
  if(min===null){
    min = 0;
  }




  }








};


