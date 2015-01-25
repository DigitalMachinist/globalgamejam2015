'use strict';

angular
  .module( 'globalgamejam2015App' )
  .factory( 'devsData', function devsData( Dev, peopleData, jobsData, Ability ) {

    // Create the base object to augment.
    var self = {};

    // Helpers

    self.getRandomDev = function ( maxLevel ) {

      // Choose a random level between 1 and maxLevel.
      var randomLevel = Math.ceil( Math.random() * maxLevel );

      // Fill an array with that many random job levels.
      // var levelMap = {
      //   'ART': 0, 'COD': 0, 'DSN': 0, 'PR': 0, 'PRD': 0, 'QA': 0
      // };
      var jobLevels = [];
      var abilities = [ jobsData.attackAbility ];
      for ( var i = 0; i < randomLevel; i++ ) {
        var jobLevel = jobsData.getRandomJobLevel( i === 0 );
        //levelMap[ jobLevel.jobName ]++;
        var count = 0;
        for ( var j = 0; j < jobLevels.length; j++ ) {
          if ( jobLevel.jobName === jobLevels[ j ].jobName ) {
            count++;
          }
        }
        var copyJobLevel = angular.copy( jobLevel );
        jobLevels.push( jobLevel );
        var copyAbility = angular.copy( jobsData.jobsMap[ jobLevel.jobName ].abilities[ count ] );
        abilities.push( copyAbility );
      }

      console.log( abilities );

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

    self.getNumDevs = function () {
      var total = 0;
      for ( var i = 0; i < self.devs.length; i++ ) {
        if ( !self.devs[ i ].empty ) {
          total++;
        }
      }
      return total;
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