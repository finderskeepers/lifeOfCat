/***
	
  @author: finderskeepers

***/


var cat = function(yourCat){

	this.name = yourCat.name;
	this.color = yourCat.color || colors[random(0,4)];
	this.age = yourCat.age || new Date(minutes);
	this.sex = yourCat.sex || "female";
	this.happiness = yourCat.happiness || 20; 

	//life counter
	var life;

	//cats of yourCat
	var cats = [];

	//some such WOW AMAZING colors
	var colors = ['black', 'golden', 'white', 'grey', 'mixed'];

	//generates random number from initial value to end value
	var random = function(initial, end){
		return Math.floor((Math.random() * initial) + end);
	};


	//new troublemakers are loading...
	function newMeows(name, color, age){
		new cat{
		  name: name,
		  color: color,
		  age: age,
		  sex: random(0, 1) ? "male" : "female"
		};

		cats.push(cat);
	};


	this.growUp = function(){		//a minute is 1 such WOW....... boring new age.
		life = setInterval(function(){
		  this.age++;
		  this.happiness -= 5;
		}, 60000);
	};


	this.death = function(){		//I can't endure hooomans stupidity anymore.
		if(this.age > 10)
		  clearInterval(life);
	};


	this.flee = function(){			//That's it, bye.
		if(this.happiness < -50){
		  cat = null;
		  cats = [];
		}  
	};


	this.isHungry = function(){
		return true;			//You're god damn right, hooman!..
	};


	this.feedMeHooman = function(){
		if(this.isHungry()){	//always...
		  this.happiness -= 20;
		  throw new Error("WHERE IS MY FUCKING FOOD HOOOOOMAN???");
		}
	};


	this.eat = function(){
		this.happiness += 10;		//can't touch this \_o_/
		console.log("Namnamnamnam");
	}


	this.giveAFuck = function(thing){
		if(thing != "food"){		//What's in it what's in it c'moooooooon
		  throw new Error("Hmm, meow!" + " (There is no food, and no reason to give a fuck!)");
		  return false;
		}
			
		else{				//Don't you see? I'm busy...
		  this.eat();
		  return true;
		}
	};


	this.throwIt = function(thing){
		if(thing == 'unbreakable')	//Hmmm let me see, is it breakable??
		  continue;		//No? Nevermind...
		
		else				//Yes?
		  this.happiness += 50;	//Because I'm happy :3
		  throw new Error("Hmmm, meow!" + " (Zhehehe, I fucking throw it...)");
	};


	this.pregnant = function(){
		var date = new Date();
		var month = date.getMonth();

		if(month == 2){ 		//Behoooold humans, March is coming....
		  this.getBaby(random(1, 100)); //It is impossible not to get pregnant, so 1...
		  this.happiness += 10;
		  return true;
		}

		else				//No March no babies...
		  return false;
	};


	this.getBaby = function(value){		//Sssssh wait, new troublemakers are coming...
		for(var i = 0; i < value; i++)
		  new newMeows('meow' + cats.length , colors[random(0,5)], 0);
	};
	
};

module.exports = cat;
