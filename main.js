/*******************
 * YOUR CODE HERE! *
 *******************/
function capitalize(cap) {
  return cap.toUpperCase()
}
function exclaim(point) {
  return point+'!'
}
function firstCharacter(first) {
  return first[0]
}
function lastCharacter(last) {
  return last[last.length-1]
}
function oneCharacter(str, num) {
  return str[num]
}
function twoCharacters(str, num1, num2) {
  return str[num1] + str[num2]
}
function yeller(str) {
  return str.toUpperCase()+"!!!"
}
function initials(name) {
  return name[0]+'.'+name[name.indexOf(" ")+1]+'.'
}

/********************************************************************
 * THIS CODE IS FOR INTERNAL USE ONLY. DON'T CHANGE ANYTHING BELOW! *
 ********************************************************************/

if (typeof capitalize === 'undefined') {
  capitalize = undefined;
}

if (typeof exclaim === 'undefined') {
  exclaim = undefined;
}

if (typeof firstCharacter === 'undefined') {
  firstCharacter = undefined;
}

if (typeof lastCharacter === 'undefined') {
  lastCharacter = undefined;
}

if (typeof oneCharacter === 'undefined') {
  oneCharacter = undefined;
}

if (typeof twoCharacters === 'undefined') {
  twoCharacters = undefined;
}

if (typeof initials === 'undefined') {
  initials = undefined;
}

if (typeof yeller === 'undefined') {
  yeller = undefined;
}


module.exports = {
  capitalize,
  exclaim,
  firstCharacter,
  lastCharacter,
  oneCharacter,
  twoCharacters,
  yeller,
  initials,
};