
'use strict';
angular.module('newappApp')
    .controller('ContactCtrl', function($scope) {
    
    	$scope.submitForm = function (isValid) {
    		if(isValid) {

			var name = $("#name").val().trim();
			var email = $("#inputEmail").val().trim();
			var message = $("#textArea").val().trim();
			
			var newInquiry = {
				Contact: name,
				email: email,
				message: message
			}

			database.ref("/Inquiry").push(newInquiry);

			$("#thanks").append("<h4> Thanks for your message - I will be in contact with you soon!</h4>")
			$("#name").val("");
			$("#inputEmail").val("");
			$("#textArea").val("");
			
			return false;
		}
    	};
	});