var RetiredForagerBee = function(age) {
  //calls the superclasses constructor with the current input for age (or 40 as default)
  ForagerBee.call(this, age || 40);
  //assigns/overrides its own characteristics to the properties of superClass
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';
};

//creates a fallback class prototype for access to superClasses methods/properties
RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);
//that pointed the CTOR to the superclasses CTOR, so we have to reassign to this CTOR function
RetiredForagerBee.prototype.constructor = (RetiredForagerBee);

//override the superClasses function (forage)
RetiredForagerBee.prototype.forage = function() {
  return 'I am too old, let me play cards instead';
};
//Implement its own new function (gamble)
RetiredForagerBee.prototype.gamble = function() {
  this.treasureChest.push('treasure');
};