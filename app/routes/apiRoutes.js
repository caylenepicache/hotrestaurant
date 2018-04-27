// Require appropriate js file as a module where we can pull the allFriends array in the friends.js file
var allTables = require('data/tables.js');

module.exports = function(app){
  //Route to display all friends that are saved.
  app.get('/api/friends', function(req,res){
    res.json(allFriends);
  });

//A POST route that follows the on "click" submit event handler in survey.html.
//Post function simultaneously checks compatability and then adds the new user's information to the friends.js file
  app.post('/api/friends', function(req,res){

    // This statement returns the object information of the best match friend back to the survey.html page where they will display their name and photo through modal. 
    res.json(bestMatchFriend)
    
    // We finally add the new user's information to the allFriends array. The user's information must be added to the array last because otherwise
    // the logic of this page will find the new user most compatible with themselves. 
    allFriends.push(req.body);
    
  });
};