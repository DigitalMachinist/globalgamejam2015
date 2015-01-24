'use strict';

angular
  .module( 'globalgamejam2015App' )
  .directive( 'devcard', function () {
    return {
      templateUrl: 'views/devcard.html',
      restrict: 'E',
      scope: {
        model: '=',
        onFired: '='
      },
      link: function postLink( $scope, $element, $attrs ) {

        // Event Handlers
        
        $scope.onFireButtonClicked = function () {
          if ( typeof( $scope.onFired ) === 'function' ) {
            $scope.onFired( $scope.model );
          }
        };

        // Init

        ( function init () {

          //console.log( $scope.model );

        } )();

      }
    };
  } );