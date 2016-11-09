var user = require('../user.js');
var skillz = require('../skillz.js');
var secrets = require('../secrets.js');

module.exports = {
	getName: function(req, res, next){
		res.json({name: user.name})
	},
	getLocation: function(req, res, next){
		res.json({location: user.location})
	},
	getOccupations: function(req,res,next){
		if (req.query.order){
			if (req.query.order === "desc"){
				res.json({occupations: user.occupations.sort()})
			}
			if (req.query.order === "asc"){
				res.json({occupations: user.occupations.sort().reverse()})
			}
		} else {
			res.json({occupations: user.occupations})
		}
	},
	getOccupationsLatest: function(req,res,next){
		res.json({latestOccupation: user.occupations[user.occupations.length-1]})
	},
	getHobbies: function(req, res, next){
		res.json({hobbies: user.hobbies})
	},
	getHobbiesByType: function(req, res, next){
		var type = req.params.type; 
		var result = user.hobbies.filter(function(elem){
			return elem.type === type;
		})
		res.json({hobby_by_type: result})
	},
	getFamily: function(req,res,next){
		if (req.query.relation){
			var relation = req.query.relation;
			var result = user.family.filter(function(elem){
				return elem.relation === relation;
			})
			res.json({family: result})
		} else {
			res.json({family: user.family})
		}
	},
	getFamilyByGender: function(req, res, next){
		var gender = req.params.gender;
		var result = user.family.filter(function(elem){
			return elem.gender === gender;
		})
		res.json({family_by_gender: result})
	},
	getRestaurants: function(req, res, next){
		if (req.query.rating){
			var lowerBound = req.query.rating;
			var result = user.restaurants.filter(function(elem){
				return elem.rating >= lowerBound;
			})
			res.json({restaurants: result})
		} else {
			res.json({restaurants: user.restaurants})
		}
	},
	getRestaurantsByName: function(req, res, next){
		var name = req.params.name;
		var result = user.restaurants.filter(function(elem){
			return elem.name === name;
		})
		res.json({restaurants_by_name: result})
	},
	////////////////////////////////////// step 5
	updateName: function(req, res, next){
		user.name = req.body.name;
		res.send();
	},
	updateLocation: function(req, res, next){
		user.location = req.body.location;
		res.send();
	},
	createHobby: function(req, res, next){
		var propNames = Object.getOwnPropertyNames(req.body)
		if (propNames.length === 2 && propNames[0] === 'name' && propNames[1] === 'type'){
			user.hobbies.push(req.body);
		}
		res.send(user.hobbies)
	},
	createOccupation: function(req, res, next){
		user.occupations.push(req.body.occupation)
		res.send(user.occupations)
	},
	createFamily: function(req, res, next){
		var propNames = Object.getOwnPropertyNames(req.body)
		if (propNames.length === 3 && propNames[0] === 'name' && propNames[1] === 'relation' && propNames[2] === 'gender'){
			user.family.push(req.body);
		}
		res.send(user.family)
	},
	createRestaurant: function(req, res, next){
		var propNames = Object.getOwnPropertyNames(req.body)
		if (propNames.length === 3 && propNames[0] === 'name' && propNames[1] === 'type' && propNames[2] === 'rating'){
			user.restaurants.push(req.body);
		}
		res.send(user.restaurants)
	},
	///////////////////////////// step 6
	getSkillz: function(req, res, next){
		if (req.query.experience){
			var result = skillz.filter(function(elem){
				return elem.experience === req.query.experience;
			})
			res.json(result)
		} else {
			res.json(skillz)
		}
	},
	createSkillz: function(req, res, next){
		var propNames = Object.getOwnPropertyNames(req.body)
		if (propNames.length === 3 && propNames[0] === 'name' && propNames[1] === 'experience' && propNames[2] === 'id'){
			skillz.push(req.body);
		}
		res.json(skillz)
	},
	getSecrets: function(req, res, next){
		res.json(secrets)
	}
	
	
	
	
	
	
	
	
	
	
	
}



































