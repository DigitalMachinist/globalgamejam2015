'use strict';

angular
  .module( 'globalgamejam2015App' )
  .factory( 'enemyData', function enemyData ( Enemy ) {

      // Create the base object to augment.
      var self = {};

      // Helpers

      self.getRandomEnemy = function ( minHireCost, maxHireCost ) {

        return;

      };

      // Init
      ( function init () {

        self.enemies = [

          new Enemy( {
            name: 'ENEMY 1', 
            jobName: 'BUG',
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
            jobName: 'CLN',
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
            name: 'ENEMY 3', 
            jobName: 'CRT',
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
            name: 'ENEMY 4', 
            jobName: 'CSL',
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
            name: 'ENEMY 5', 
            jobName: 'EXE',
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
            name: 'ENEMY 6', 
            jobName: 'HRD',
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
          } )

        ];

      } )();

      // Export
      return self;

  } );