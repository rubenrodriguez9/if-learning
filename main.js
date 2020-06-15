/******************************
 * YOUR CODE GOES RIGHT HERE! *
 ******************************/
function isItLong(long){
  if(long.length > 20){
    return "That's a long string!"
  }
}

function isItMedium(medium){
  if (medium.length >= 10 && medium.length <= 20){
  return "That's a regular sized string!"
  }
}

function isItShort(shorty){
  if(shorty.length < 10){
    return "That's a small string!"
  }
  return "That's not a small string!"
}

function howLongIsMyString(how){
  if(how.length > 20){
    return "That's a long string!"
  }
  else if(how.length <= 20 && how.length >=10){
    return "That's a regular sized string!"
  }
  return "That's a small string!"
}

function instructorHeight(height){
  if(height === 'Colin'){
    return 62
  }
  if(height === 'Mesuara'){
    return 67
  }
  return "I don't know that instructor!"
}


/**********************************
 *      OUR CODE GOES BELOW.      *
 * THIS IS FOR INTERNAL USE ONLY. *
 * DO NOT ADD OR CHANGE ANYTHING! *
 **********************************/

if (typeof isItLong === 'undefined') {
  isItLong = undefined;
}

if (typeof isItMedium === 'undefined') {
  isItMedium = undefined;
}

if (typeof isItShort === 'undefined') {
  isItShort = undefined;
}

if (typeof howLongIsMyString === 'undefined') {
  howLongIsMyString = undefined;
}

if (typeof instructorHeight === 'undefined') {
  instructorHeight = undefined;
}


module.exports = {
  isItLong,
  isItMedium,
  isItShort,
  howLongIsMyString,
  instructorHeight,
}