'use strict';

angular
  .module( 'globalgamejam2015App' )
  .controller( 'PlanningProjectCtrl', function ( $scope, gameData ) {

    // Event Handlers
    

    // Helpers


    // Init
    ( function init () {

      $scope.months = [ 
        { name: 'JAN', past: gameData.game.isPastMonthNum(  1 ) },  
        { name: 'FEB', past: gameData.game.isPastMonthNum(  2 ) }, 
        { name: 'MAR', past: gameData.game.isPastMonthNum(  3 ) }, 
        { name: 'APR', past: gameData.game.isPastMonthNum(  4 ) }, 
        { name: 'MAY', past: gameData.game.isPastMonthNum(  5 ) }, 
        { name: 'JUN', past: gameData.game.isPastMonthNum(  6 ) }, 
        { name: 'JUL', past: gameData.game.isPastMonthNum(  7 ) }, 
        { name: 'AUG', past: gameData.game.isPastMonthNum(  8 ) }, 
        { name: 'SEP', past: gameData.game.isPastMonthNum(  9 ) }, 
        { name: 'OCT', past: gameData.game.isPastMonthNum( 10 ) }, 
        { name: 'NOV', past: gameData.game.isPastMonthNum( 11 ) }, 
        { name: 'DEC', past: gameData.game.isPastMonthNum( 12 ) }
      ];

      $scope.milestoneFunGoal = gameData.game.getPhaseFun();
      $scope.funTowardGoal = gameData.game.getFunTowardPhase();

      $scope.funLimit = gameData.game.getPhaseFunTotal( 3 ) + 2500;
      $scope.funTotal = gameData.game.getFun();

      $scope.gameData = gameData;

    } )();

  } );