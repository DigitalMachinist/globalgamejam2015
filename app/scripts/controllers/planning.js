 'use strict';

angular
  .module( 'globalgamejam2015App' )
  .controller( 'PlanningCtrl', function ( $scope, $state, gameData, sprintData ) {

    // Init
    ( function init () {

      // Redirect the user back to the main menu if their game isn't initalized.
      if ( !gameData.game ) {
        $state.go( 'menu.main' );
      }
      else {
        sprintData.getRandomSprint( gameData.game.getPhaseNum() );
      }

    } )();

  } );