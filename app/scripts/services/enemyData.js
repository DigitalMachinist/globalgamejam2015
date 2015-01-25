'use strict';

angular
  .module( 'globalgamejam2015App' )
  .factory( 'enemyData', function enemyData ( Enemy, enemyJobData ) {

      // Create the base object to augment.
      var self = {};

      // Helpers

      self.getRandomEnemy = function ( minHireCost, maxHireCost ) {
        var enemy = null;
        var hireCost = 0;
        do
        {
          var randomInt = Math.floor( Math.random() * self.enemies.length );
          enemy = self.enemies[ randomInt ];
          hireCost = enemy.getHireCost();
        }
        while ( hireCost >= minHireCost && hireCost <= maxHireCost );
        return enemy;
      };

    self.getEmptyEnemy = function () {
      return {
        empty: true
      };
    };

      // Init
      ( function init () {

        self.enemies = [

          new Enemy( {
            name: 'ENEMY 1', 
            job: enemyJobData.enemyJobsMap.BUG,
            maxHP: 50,  
            atbSpeed: 10, 
            art: 10, 
            cod: 10, 
            dsn: 10, 
            pr: 10, 
            prd: 10, 
            qa: 10, 
            xp: 100, 
            hireCost: 50, 
            currentAniFrame: 0, 
            currentAniName: 'idle'
          } ),

          new Enemy( {
            name: 'ENEMY 2', 
            job: enemyJobData.enemyJobsMap.CLN,
            maxHP: 75,  
            atbSpeed: 20, 
            art: 10, 
            cod: 20, 
            dsn: 10, 
            pr: 20, 
            prd: 10, 
            qa: 20, 
            xp: 150, 
            hireCost: 80, 
            currentAniFrame: 0, 
            currentAniName: 'idle'
          } ),

          new Enemy( {
            name: 'ENEMY 3', 
            job: enemyJobData.enemyJobsMap.CRT,
            maxHP: 20,  
            atbSpeed: 50, 
            art: 5, 
            cod: 5, 
            dsn: 5, 
            pr: 5, 
            prd: 5, 
            qa: 5, 
            xp: 100, 
            hireCost: 10, 
            currentAniFrame: 0, 
            currentAniName: 'idle'
          } ),

          new Enemy( {
            name: 'ENEMY 4', 
            job: enemyJobData.enemyJobsMap.CSL,
            maxHP: 150,  
            atbSpeed: 7, 
            art: 20, 
            cod: 20, 
            dsn: 20, 
            pr: 20, 
            prd: 20, 
            qa: 20, 
            xp: 200, 
            hireCost: 100, 
            currentAniFrame: 0, 
            currentAniName: 'idle'
          } ),

          new Enemy( {
            name: 'ENEMY 5', 
            job: enemyJobData.enemyJobsMap.EXE,
            maxHP: 50,  
            atbSpeed: 10, 
            art: 15, 
            cod: 10, 
            dsn: 15, 
            pr: 10, 
            prd: 10, 
            qa: 15, 
            xp: 150, 
            hireCost: 50, 
            currentAniFrame: 0, 
            currentAniName: 'idle'
          } ),

          new Enemy( {
            name: 'ENEMY 6', 
            job: enemyJobData.enemyJobsMap.HRD,
            maxHP: 100,  
            atbSpeed: 20, 
            art: 10, 
            cod: 10, 
            dsn: 10, 
            pr: 10, 
            prd: 10, 
            qa: 10, 
            xp: 200, 
            hireCost: 80, 
            currentAniFrame: 0, 
            currentAniName: 'idle'
          } )

        ];

      } )();

      // Export
      return self;

  } );