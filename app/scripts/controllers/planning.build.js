'use strict';

angular
  .module( 'globalgamejam2015App' )
  .controller( 'PlanningBuildCtrl', function ( $scope, gameData, featuresData ) {

    // Event Handlers
    

    // Helpers


    // Init
    ( function init () {

      $scope.milestoneFunGoal = gameData.game.getPhaseFun();
      $scope.funTowardGoal = gameData.game.getFunTowardPhase();

      $scope.featuresData = featuresData;
      $scope.gameData = gameData;

    } )();

  } );