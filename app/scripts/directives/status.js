'use strict';

angular
	.module( 'globalgamejam2015App' )
	.directive( 'status', function () {
    return {
      templateUrl: 'views/status.html',
      restrict: 'E',
      scope: {
      	'model': '='
      },
      link: function postLink( $scope, $element, $attrs ) {

        // Helpers
        
        $scope.isHpCritical = function ( currentHp ) {
        	return currentHp < ( 0.4 * $scope.model.maxHp );
        };

        $scope.isHpHurt = function ( currentHp ) {
        	return currentHp >= ( 0.4 * $scope.model.maxHp );
        };

        $scope.isHpSafe = function ( currentHp ) {
        	return currentHp >= ( 0.7 * $scope.model.maxHp );
        };

        $scope.isAtbReady = function ( atb ) {
        	return atb >= 100;
        };

        // Init

        ( function init () {



        } )();

      }
    };
} );