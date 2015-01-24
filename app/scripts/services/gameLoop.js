'use strict';

angular
  .module( 'globalgamejam2015App' )
  .factory( 'gameLoop', function gameLoop( $interval, $rootScope, $broadcast, gameData ) {

    // Create the base object to augment.
    var self = {};

    // Update interval controls.
    var intervalPromise;
    self.startUpdate = function () {
      intervalPromise = $interval( update, 100 );
    };
    self.stopUpdate = function () {
      $interval.cancel( intervalPromise );
    };

    // Main update function.
    function update () {

      // Do some stuff!!!

      // Broadcast the update event to any other objects that might be listening.
      $rootScope.$broadcast( 'update' );

    }

    // Init
    ( function init () {

      intervalPromise = null;

    } )();

    // Export
    return self;

  } );