'use strict';

angular
  .module( 'globalgamejam2015App' )
  .controller( 'PlanningSprintCtrl', function ( $scope, $state, gameData, sprintData ) {

    // Event Handlers
    
    $scope.onSprintStartButtonClicked = function ( sprint ) {
      sprintData.selectedSprint = sprint;
      startSelectedSprint();
    };

    // Helpers

    function startSelectedSprint () {
      console.log( sprintData.selectedSprint );
      if ( gameData.game.spend$$$( sprintData.selectedSprint.getInvestment() ) ) {
        $state.go( 'sprint' );
      }
    }

    // Init
    
    ( function init () {

      $scope.gameData = gameData;
      $scope.sprintData = sprintData;

    } )();

  } );