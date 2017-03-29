
'use strict';

app.directive('overlay', function() {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'scripts/directives/overlay.html',
    
    link: function(scope, element, attrs, ngAnimate) {
      scope.showOverlay = function() {
       element.addClass('overlayPic');

  


      };
      scope.hideOverlay = function(){
        element.removeClass("overlayPic")
      };  
    }
  };
});