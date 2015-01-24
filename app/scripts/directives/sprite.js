'use strict';

angular
	.module( 'globalgamejam2015App' )
  .directive( 'sprite', function () {
    return {
      templateUrl: 'views/sprite.html',
      restrict: 'E',
      scope: {
      	'facing': '@',
      	'model': '='
      }, 
      link: function postLink( $scope, $element, $attrs ) {

        // Helpers
        


        // Init

        ( function init () {



        } )();

      }
    };
  } );