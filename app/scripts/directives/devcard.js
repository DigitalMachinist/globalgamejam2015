'use strict';

angular
  .module( 'globalgamejam2015App' )
  .directive( 'devcard', function () {
    return {
      templateUrl: 'views/devcard.html',
      restrict: 'E',
      scope: {
        index: '@',
        model: '=',
        onFired: '=',
        onHired: '=',
        type: '@'
      },
      link: function postLink( $scope, $element, $attrs ) {

        // Event Handlers
        
        $scope.onFireButtonClicked = function () {
          if ( typeof( $scope.onFired ) === 'function' ) {
            $scope.onFired( $scope.model );
          }
        };

        $scope.onHireButtonClicked = function () {
          if ( typeof( $scope.onHired ) === 'function' ) {
            $scope.onHired( $scope.model, $scope.index );
          }
        };

        // Helpers

        $scope.isNull = function () {
          return ( $scope.model === null );
        };

        // Init

        ( function init () {

          //console.log( $scope.model );

        } )();

      }
    };
  } );