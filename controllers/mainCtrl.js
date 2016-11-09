var user = require('../user.js');

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
	}
}









