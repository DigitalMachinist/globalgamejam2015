'use strict';
angular
	.module( 'globalgamejam2015App' )
	.controller( 'SprintCtrl', function ( $scope, $state, gameData, devsData, enemyData, 
    gameLoop, $timeout ) {

    // Event Handlers

    $scope.onAbilityClicked = function ( ability ) {
    	return ability;
    };

    $scope.onAbilityHovered = function ( ability ) {
    	return ability;
    };

    $scope.onDevHovered = function ( dev ) {
    	return dev;
    };

    $scope.onDevClicked = function ( dev ) {
    	return dev;
    };

    $scope.onEnemyHovered = function ( enemy ) {
    	return enemy;
    };

    $scope.onEnemyClicked = function ( enemy ) {
    	return enemy;
    };

    // Helpers
    
    // Update

    $scope.$on( 'update', function () {

      //console.log( devsData.devs[ 0 ].getCurrentAniClass() );

      for ( var i = 0; i < devsData.devs.length; i++ ) {
        devsData.devs[ i ].update();
      }

      for ( i = 0; i < enemyData.enemies.length; i++ ) {
        enemyData.enemies[ i ].update();
      }

    } );

    // Init
    
    ( function init () {

      // Redirect the user back to the main menu if their game isn't initalized.
      if ( !gameData.game ) {
        $state.go( 'menu.main' );
      }
      else {

        // Wait briefly before starting up combat.
        $timeout( function () {
          gameLoop.startUpdate( 100 );
        }, 1000 );

        $scope.devsData = devsData;
        $scope.enemyData = enemyData;

        console.log( devsData.devs[ 0 ].getInitialJobName() );
        console.log( devsData.devs[ 1 ].getInitialJobName() );
        console.log( devsData.devs[ 2 ].getInitialJobName() );
        console.log( devsData.devs[ 3 ].getInitialJobName() );

        devsData.devs[ 0 ].setAnimation( 'attack' );

      }

    } )();

	} );