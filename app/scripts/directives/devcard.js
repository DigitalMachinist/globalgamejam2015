'use strict';

angular
  .module( 'globalgamejam2015App' )
  .directive( 'devcard', function () {
    return {
      templateUrl: 'views/devcard.html',
      restrict: 'E',
      scope: {
        model: '=',
        onClicked: '=', 
        onFired: '=',
        onHired: '=',
        type: '@'
      },
      link: function postLink( $scope, $element, $attrs ) {

        // Event Handlers
        $scope.onCardClicked = function () {
          if ( typeof( $scope.onClicked ) === 'function' ) {
            $scope.onClicked( $scope.model );
          }
        };
        $scope.onFireButtonClicked = function () {
          if ( typeof( $scope.onFired ) === 'function' ) {
            $scope.onFired( $scope.model );
          }
        };
        $scope.onHireButtonClicked = function () {
          if ( typeof( $scope.onHired ) === 'function' ) {
            $scope.onHired( $scope.model );
          }
        };

        // Init
        ( function init () {

          //console.log( $scope.model );

        } )();

      }
    };
  } );