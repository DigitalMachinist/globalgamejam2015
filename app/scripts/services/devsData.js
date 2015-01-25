'use strict';

angular
  .module( 'globalgamejam2015App' )
  .factory( 'devsData', function devsData( Dev, peopleData, jobsData ) {

    // Create the base object to augment.
    var self = {};

    // Helpers

    self.getRandomDev = function ( maxLevel ) {

      // Choose a random level between 1 and maxLevel.
      var randomLevel = Math.ceil( Math.random() * maxLevel );

      // Fill an array with that many random job levels.
      var jobLevels = [];
      var abilities = [];
      for ( var i = 0; i < randomLevel; i++ ) {
        var jobLevel = jobsData.getRandomJobLevel( i === 0 );
        var count = 0;
        for ( var j = 0; j < jobLevels.length; j++ ) {
          if ( jobLevel === jobLevels[ j ] ) {
            count++;
          }
        }
        jobLevels.push( jobLevel );
        abilities.push( jobsData.jobsMap[ jobLevel.jobName ].abilities[ count ] );
      }

      // Create a dev from a random person and the job levels array.
      var dev = new Dev(
        peopleData.getRandomPerson(),
        jobLevels,
        abilities
      );
      dev.gainXp( 100 );
      return dev;

    };

    self.getEmptyDev = function () {
      return {
        empty: true
      };
    };

    self.getRandomHireableDevs = function ( maxLevel ) {

      // Fill the hireable devs array with random devs.
      for ( var i = 0; i < self.hireableDevs.length; i++ ) {
        self.hireableDevs[ i ] = self.getRandomDev( maxLevel );
      }

    };

    // Init
    
    ( function init () {

      self.numDevs = 0;
      self.devs = [ 
        self.getEmptyDev(), 
        self.getEmptyDev(),
        self.getEmptyDev(), 
        self.getEmptyDev()
      ];
      self.hireableDevs = [ 
        self.getEmptyDev(), 
        self.getEmptyDev(), 
        self.getEmptyDev(), 
        self.getEmptyDev() 
      ];

    } )();

    // Export
    return self;
    
  } );