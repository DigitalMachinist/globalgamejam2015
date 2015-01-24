'use strict';

angular
  .module( 'globalgamejam2015App' )
  .controller( 'PlanningCtrl', function ( $scope, $location, gameData ) {

    // Init
    ( function init () {

      console.log( gameData.game );
      if ( !gameData.game ) {
        $location.href = '#';
      }

    } )();

  } );