'use strict';

angular
  .module( 'globalgamejam2015App' )
  .factory( 'devsData', function devsData( Dev, peopleData, jobsData ) {

    // Create the base object to augment.
    var self = {};

    // Helpers

    self.getRandomDev = function ( maxLevel ) {

      // Choose a random level between 1 and maxLevel.
      var level = Math.ceil( Math.random() * maxLevel );

      // Fill an array with that many random job levels.
      var jobLevels = [];
      for ( var i = 0; i < level; i++ ) {
        jobLevels.push( jobsData.getRandomJobLevel( i === 0 ) );
      }

      // Create a dev from a random person and the job levels array.
      return new Dev(
        peopleData.getRandomPerson(),
        jobLevels
      );

    };

    self.getRandomHireableDevs = function ( maxLevel ) {

      // Fill the hireable devs array with random devs.
      for ( var i = 0; i < self.hireableDevs.length; i++ ) {
        self.hireableDevs[ i ] = self.getRandomDev( maxLevel );
      }

    };

    // Init
    
    ( function init () {

      self.devs = [ null, null, null, null ];
      self.hireableDevs = [ null, null, null, null ];

    } )();

    // Export
    return self;
    
  } );