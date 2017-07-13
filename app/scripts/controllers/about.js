'use strict';

angular.module('newappApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.tech = 
    	{
    		SPA: "React.js/Redux, AngularJS",
    		client: "HTML5/CSS3, jQuery, JavaScript, Bootstrap, Semantic UI, Materialize, AJAX/JSON, REST, Git, Responsive Web Design, UX/UI emphasis.",
    		server: "Node.js, Express.js, EJS, Handlebars, Cheerios",
    		db: "MongoDB, Mongoose, MySQL, Sequelize, Firebase"
    	}
  });
