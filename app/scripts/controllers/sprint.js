'use strict';
angular
	.module( 'globalgamejam2015App' )
	.controller( 'SprintCtrl', function ( $scope, $state, gameData, $gameLoop, $timeout ) {

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
    
    

    // Init
    
    ( function init () {

      // Redirect the user back to the main menu if their game isn't initalized.
      if ( !gameData.game ) {
        $state.go( 'menu.main' );
      }
      else {
        // Wait briefly before starting up combat.
        $timeout( function () {
          $gameLoop.startUpdate( 100 );
        }, 2000 );
      }

    } )();

	} );