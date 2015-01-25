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
        // But if not, mix up a new set of sprints since the player probably just
        // returned to this view from a fight or just started a new game.
        sprintData.getRandomSprintGroup( gameData.game.getPhaseNum() );
      }

    } )();

  } );