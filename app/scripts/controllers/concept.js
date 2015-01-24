'use strict';

angular
  .module( 'globalgamejam2015App' )
  .controller( 'ConceptCtrl', function ( $scope, $state, gameData, Game ) {

    // Event Handlers

    $scope.onOkButtonClicked = function () {
      gameData.setGame( $scope.title );
      $state.go( 'planning.team' );
    };

    // Init
    
    ( function init () {

      $scope.title = '1337 H4X GAEM';

    } )();

  } );