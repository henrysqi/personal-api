var express = require('express');
var bodyParser = require('body-parser');
var middleware = require('./controllers/middleware.js');
var mainCtrl = require('./controllers/mainCtrl.js');

var app = express();

app.use(bodyParser.json())

app.use(middleware.addHeaders);


app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);
app.get('/occupations', mainCtrl.getOccupations);
app.get('/occupations/latest', mainCtrl.getOccupationsLatest);
app.get('/hobbies', mainCtrl.getHobbies);
app.get('/hobbies/:type', mainCtrl.getHobbiesByType);
app.get('/family', mainCtrl.getFamily);
app.get('/family/:gender', mainCtrl.getFamilyByGender);
app.get('/restaurants', mainCtrl.getRestaurants);
app.get('/restaurants/:name', mainCtrl.getRestaurantsByName);

app.get('/skillz', mainCtrl.getSkillz);

app.get('/secrets/:username/:pin', middleware.verifyUser, mainCtrl.getSecrets);

app.put('/name', mainCtrl.updateName);
app.put('/location', mainCtrl.updateLocation);

app.post('/hobbies', mainCtrl.createHobby);
app.post('/occupations', mainCtrl.createOccupation);
app.post('/family', mainCtrl.createFamily);
app.post('/restaurants', mainCtrl.createRestaurant);
app.post('/skillz', middleware.generateId, mainCtrl.createSkillz);








app.listen(8000, function(){
	console.log("im listening yo")
})