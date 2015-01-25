'use strict';

angular
  .module( 'globalgamejam2015App' )
  .controller( 'PlanningBuildCtrl', function ( $scope, gameData, featuresData ) {

    // Event Handlers
    $scope.onFeatureClicked = function ( feature, index ) {
      if ( gameData.game.spend$$$( feature.cost ) ) {
        gameData.game.addFeature( feature );
        featuresData.features.splice( index, 1 );
        updateProgress();
        // console.log( 'GAME FEATURES ', gameData.game.features );
        // console.log( 'GAME FUN ', gameData.game.getFun() );
        // console.log( '$$$ ', gameData.game.getCurrent$$$() );
        // console.log( 'FEATURES LIST ', featuresData.features );
      }
    };

    // Helpers
    function updateProgress () {
      $scope.milestoneFunGoal = gameData.game.getPhaseFun();
      $scope.funTowardGoal = gameData.game.getFunTowardPhase();
    }

    // Init
    ( function init () {

      updateProgress();

      $scope.featuresData = featuresData;
      $scope.gameData = gameData;

      //console.log( featuresData.features );

    } )();

  } );