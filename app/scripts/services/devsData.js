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
      var jobLevels = [];
      var abilities = [ self.attackAbility ];
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

      self.attackAbility = new Ability(
        'ATTACK', 
        '', 
        '', 
        1, 
        'Use the pointy end.', 
        function ( dev, target, ability, $scope ) {
          var isMiss = ( Math.random() > 0.9 );
          if ( isMiss ) {
            $scope.instructions = dev.getName() + ' whiffs! ' + 
              target.getName() + ' laughs a little.';
            return;
          }
          var targetJob = target.job.name.toLowerCase();
          var attackerStat = dev[ targetJob ];
          var squareable = Math.max( 0, attackerStat - 10 );
          var nonSquareable = Math.min( 10, attackerStat );
          var damage = squareable * squareable + Math.random() * nonSquareable;
          var isCritical = ( Math.random() > 0.8 );
          if ( isCritical ) {
            var multiplier = 1 + Math.random();
            damage *= multiplier;
          }
          var finalDamage = Math.round( damage );
          target.doDamage( damage ); 
          if ( isCritical ) {
            $scope.instructions = dev.getName() + ' scored a crit! ' + 
              target.getName() + ' takes ' + finalDamage + ' damage.';
          }
          else {
            $scope.instructions = dev.getName() + ' hit! ' + 
              target.getName() + ' takes ' + finalDamage + ' damage.';
          }
        }
      );

    } )();

    // Export
    return self;
    
  } );