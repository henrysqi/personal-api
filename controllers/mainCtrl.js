var user = require('../user.js');

module.exports = {
	getName: function(req, res, next){
		res.json({name: user.name})
	},
	getLocation: function(req, res, next){
		res.json({location: user.location})
	},
	getOccupations: function(req,res,next){
		res.json({occupations: user.occupations})
	},
	getOccupationsLatest: function(req,res,next){
		res.json({latestOccupation: user.occupations[user.occupations.length-1]})
	},
	getHobbies: function(req, res, next){
		res.json({hobbies: user.hobbies})
	},
	getHobbiesType: function(req, res, next){
		var type = req.params.type; 
		var result = user.hobbies.filter(function(elem){
			return elem.type === type;
		})
		res.json({hobby_by_type: result})
	}
	
	
	
}