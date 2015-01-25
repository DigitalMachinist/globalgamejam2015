'use strict';

angular
  .module( 'globalgamejam2015App' )
  .directive( 'devcard', function () {
    return {
      templateUrl: 'views/devcard.html',
      restrict: 'E',
      scope: {
        model: '=', 
        onBeginHire: '=',
        onClicked: '=',
        onConfirmFire: '=',
        onConfirmHire: '=',
        type: '='
      },
      link: function postLink( $scope, $element, $attrs ) {

        // Event Handlers
        $scope.onCardClicked = function () {
          $scope.confirmFire = false;
          if ( typeof( $scope.onClicked ) === 'function' ) {
            $scope.onClicked( $scope.model );
          }
        };
        $scope.onConfirmFireButtonClicked = function () {
          $scope.confirmFire = false;
          if ( typeof( $scope.onConfirmHire ) === 'function' ) {
            $scope.onConfirmFire( $scope.model );
          }
        };
        $scope.onConfirmHireButtonClicked = function () {
          if ( typeof( $scope.onConfirmHire ) === 'function' ) {
            $scope.onConfirmHire( $scope.model );
          }
        };
        $scope.onFireButtonClicked = function () {
          $scope.confirmFire = true;
        };
        $scope.onHireButtonClicked = function () {
          if ( typeof( $scope.onBeginHire ) === 'function' ) {
            $scope.onBeginHire( $scope.model );
          }
        };

        // Init
        ( function init () {

          //console.log( $scope.model );

        } )();

      }
    };
  } );