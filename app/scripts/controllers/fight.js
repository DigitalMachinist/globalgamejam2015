'use strict';
angular
	.module( 'globalgamejam2015App' )
	.controller( 'FightCtrl', function ( $scope ) {

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



    } )();

	} );