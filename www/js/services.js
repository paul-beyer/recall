angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})

.factory('Tasks', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var tasks = [{
    id: 0,
    name: 'Hackathon 2016',
    startTime: '10:10:10',
    duration: '1 hour',
    status: 'active'
  }, {
    id: 1,
    name: 'Coding',
    startTime: '11:10:10',
    duration: '1 hour',
    status: 'ready'
  }, {
    id: 2,
    name: 'Design',
    startTime: '12:10:10',
    duration: '1 hour',
    status: 'ready'
  }, {
    id: 3,
    name: 'Developing',
    startTime: '13:10:10',
    duration: '1 hour',
    status: 'ready'
  }, {
    id: 4,
    name: 'Testing',
    startTime: '14:10:10',
    duration: '1 hour',
    status: 'ready'
  },
  {
    id: 5,
    name: 'Reading',
    startTime: '15:10:10',
    duration: '1 hour',
    status: 'ready'
  },
  {
    id: 6,
    name: 'Teaching',
    startTime: '16:10:10',
    duration: '1 hour',
    status: 'ready'
  }];
  
  var startTask = function(id) {
    console.log("Id of task starting = " + id);
    
    for (var i = 0; i < tasks.length; i++){
        tasks[i].status = tasks[i].id === id ? 'active' : 'ready';
    }
    
   }

  return {
    all: function() {
      return tasks;
    },
    startTask: startTask 
    // remove: function(chat) {
    //   chats.splice(chats.indexOf(chat), 1);
    // },
    // get: function(chatId) {
    //   for (var i = 0; i < chats.length; i++) {
    //     if (chats[i].id === parseInt(chatId)) {
    //       return chats[i];
    //     }
    //   }
    //   return null;
    // }
  };
})

.factory('AuthService', function() {
 
    var authenticated = false;
    
    this.authenticateUser = function(user, pw){
      console.log("Authenticating user");
      authenticated = false;
    }
    this.isAuthenticated = function(){
      return authenticated;
    }
    
    return {
      authenticateUser : this.authenticateUser,
      isAuthenticated : this.isAuthenticated
      
    };
    
    
});;
