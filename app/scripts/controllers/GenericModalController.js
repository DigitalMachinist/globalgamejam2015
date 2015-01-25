'use strict';

angular
  .module( 'globalgamejam2015App' )
  .controller( 'GenericModalController', [
    '$scope', '$state', '$modalInstance', '$modalArgs', '$log', '$sanitize',
    function ( $scope, $state, $modalInstance, $modalArgs, $log, $sanitize ) {

      /////////////////////
      // Event Handlers //
      ///////////////////

      $scope.onOkayButtonClicked = function () {

        if ( typeof $modalArgs.onOkayButtonClicked !== 'function' ) {
          $modalInstance.close();
          return;
        }

        $modalArgs.onOkayButtonClicked( $modalInstance );

      };

      $scope.onCancelButtonClicked = function() {

        if ( typeof $modalArgs.onCancelButtonClicked !== 'function' ) {
          $modalInstance.close();
          return;
        }

        $modalArgs.onCancelButtonClicked( $modalInstance );

      };

      /////////////////////
      // Initialization //
      ///////////////////

      ( function init() {

        if ( typeof $modalArgs === 'undefined' ) {
          $modalArgs = {};
        }

        // Place the title and message onto the $scope so they can be templated.
        $scope.title = $modalArgs.title;
        $scope.message = $sanitize( $modalArgs.message );
        $scope.cancelButtonText = $modalArgs.cancelButtonText;
        $scope.okayButtonText = $modalArgs.okayButtonText;
        $scope.showCancelButton = $modalArgs.showCancelButton;

      } )();

  } ] );