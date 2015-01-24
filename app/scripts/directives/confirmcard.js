'use strict';

angular
  .module( 'globalgamejam2015App' )
  .directive( 'devcard', function () {
    return {
      templateUrl: 'views/confirmcard.html',
      restrict: 'E',
      scope: {
        model: '=',
        onHireConfirm: '='
      },
      link: function postLink( $scope, $element, $attrs ) {

        // Event Handlers
        
        $scope.onHireButtonClicked = function () {
          if ( typeof( $scope.onHireConfirm ) === 'function' ) {
            $scope.onHireConfirm( $scope.model );
          }
        };

        // Init

        ( function init () {

          //console.log( $scope.model );

        } )();

      }
    };
  } );