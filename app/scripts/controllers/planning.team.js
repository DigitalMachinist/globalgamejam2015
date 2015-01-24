'use strict';

angular
  .module( 'globalgamejam2015App' )
  .controller( 'PlanningTeamCtrl', function ( $scope, gameData, devsData ) {

    // Event Handlers

    $scope.onDevFired = function ( dev ) {
      console.log( dev );
    };

    $scope.onDevHire = function ( dev, index ) {
      //console.log( index, dev );
      hireIndex = index;
      $scope.state = 'hire';
    };

    $scope.onHireableDevHire = function ( dev, index ) {
      //console.log( index, dev );
      var hireDev = devsData.hireableDevs[ index ];
      if ( gameData.spend$$$( hireDev.getHireCost() ) ) {
        devsData.devs[ hireIndex ] = hireDev;
        devsData.hireableDevs[ index ] = null;
      }
      $scope.state = 'team';
    };

    // Init
    
    var hireIndex = 0;

    ( function init () {

      $scope.devsData = devsData;
      $scope.gameData = gameData;
      hireIndex = 0;
      $scope.state = 'team';

      console.log( $scope.state );

    } )();

  } );