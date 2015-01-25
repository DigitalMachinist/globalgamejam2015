'use strict';

angular
  .module( 'globalgamejam2015App' )
  .controller( 'ConceptCtrl', function ( $scope, $state, gameData, Game, devsData ) {

    // Event Handlers

    $scope.onOkButtonClicked = function () {
      gameData.initGame( $scope.title );
      $state.go( 'planning.project' );
    };

    // Init
    
    ( function init () {

      $scope.title = '1337 H4X GAEM';

    } )();

  } );