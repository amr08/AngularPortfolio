'use strict';

angular.module('newappApp')
  .controller('PortfolioCtrl', function ($scope) {
    $scope.apps = [ 
	    { 
	    	project: "The Hanks Lab",
	  	  	image: "../../images/HankLab.png",
	  	  	linksite: "http://www.thehankslab.com",
	  	  	github: "https://github.com/amr08/Lab-Demo",
	  	  	tech: "Node, Express, EJS, Materialize"
	  	}, {
	  	  	project: "Schedulr",
	      	image: "../../images/Schedulr.png",
	      	linksite: "https://reactschedulr.herokuapp.com/",
	      	github: "https://github.com/clsavino/react-shift-scheduler",
	      	tech: "React, Node, Express, Mongo, Materialize",
	      	addtl: "(login & password: 'test')"
	  	},  { 
	    	project: "Mental Health In Tech",
	      	image: "../../images/MH.jpg",
	      	linksite: "https://cardengine-mhit.herokuapp.com/landing",
	      	github: "https://github.com/amr08/Mental-Health-in-Tech-App",
	      	tech: "Node, Express, MySql, EJS, SemanticUI"
	  	}, {
	  	  	project: "The Mentor Project",
	  	  	image: "../../images/mentor.png",
	  	  	linksite: "https://mentorproject.herokuapp.com/",
	  	  	github: "https://github.com/amr08/MentorProject",
	  	  	tech: "JS, jQuery, Firebase, SemanticUI"
	  	}, {
	  	  	project: "Women Who Code",
	  	  	image: "../../images/WWC.png",
	  	  	linksite: "https://www.womenwhocode.com/networks",
	  	  	github: "https://github.com/amr08/WWC-Feature",
	  	  	tech: "Google Places API, JS, HAML, Ruby"
	  	}
    ];

    $scope.extra = [
       	{ 
       		project: "Giphy Standup",
	  	  	image: "../../images/stand-up-comedy.jpg",
	  	  	linksite: "https://giphycomedy.herokuapp.com/",
	  	  	github: "https://github.com/amr08/GiphyAPIapp",
	  	  	tech: "AJAX, JSON"
	  	}, {
	  	  	project: "Real News Scraper",
	      	image: "http://www.theimaginativeconservative.org/wp-content/uploads/2016/05/roman-battle.jpg",
	      	linksite: "https://newssearch.herokuapp.com/articles",
	      	github: "https://github.com/amr08/NewsSource",
	      	tech: "MongoDB, Cheerios, Node, Express"
	  	},  { 

	  		project: "Travel Trivia",
	  	  	image: "../../images/Beautiful-Beach-Wallpaper1.jpg",
	  	  	linksite: "https://traveltrivia.herokuapp.com/",
	  	  	github: "https://github.com/amr08/TriviaGame",
	  	  	tech: "jQuery, JavaScript, HTML5/CSS3"
	  
	  	}, {
	  	  	project: "Burger App",
	  	  	image: "../../images/theburg.jpg",
	  	  	linksite: "https://sequlizedburger.herokuapp.com/burgers",
	  	  	github: "https://github.com/amr08/burgerSequelized",
	  	  	tech: "MySQL, Handlebars, Node, Express"
	  	},
	  	{
	  	  	project: "Celeb Match API",
	      	image: "../../images/oscars.jpg",
	      	linksite: "https://celebfriendmatch.herokuapp.com/",
	      	github: "https://github.com/amr08/Celeb-Friend-Finder",
	      	tech: "Node, Express, REST"
	  	}, {
	  	  	project: "Vanilla JS Hangman",
	  	  	image: "../../images/sports.jpg",
	  	  	linksite: "https://beachhangman.herokuapp.com/",
	  	  	github: "https://github.com/amr08/Vanilla-JS-Hangman",
	  	  	tech: "JavaScript, HTML5/CSS3"
	  	}, {
	  	  	project: "T-Train",
	  	  	image: "../../images/subway-spider.png",
	  	  	linksite: "https://tschedule.herokuapp.com/",
	  	  	github: "https://github.com/amr08/TrainTime",
	  	  	tech: "Firebase, JavaScript, Moment.js"
	  	},
	  	
	  	// 	project: "Mock Portfolio",
	  	//   	image: "../../images/mock.png",
	  	//   	linksite: "http://arportfolio.herokuapp.com/basicportfolio/index.html",
	  	//   	github: "https://github.com/amr08/Basic-Portfolio",
	  	//   	tech: "HTML5/CSS3"
	  	// }, {
	  	{
	  	  	project: "BamazonDB",
	  	  	image: "https://raw.githubusercontent.com/amr08/BamazonDB/master/managervid.png?token=AQcMnD7q04MR-MXDb5rFa5YYA5sNh333ks5YAZZ3wA%3D%3D",
	  	  	linksite: "https://github.com/amr08/BamazonDB/blob/master/README.md",
	  	  	github: "https://github.com/amr08/BamazonDB/blob/master/BamazonManager.js",
	  	  	tech: "MySQL, Node"
	  	}
    ];
  });
