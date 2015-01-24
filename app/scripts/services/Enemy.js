'use strict';

angular
  .module( 'globalgamejam2015App' )
  .factory( 'Enemy', function Enemy( jobsData ) {

    return function Enemy( baseObj ) {

      // Create the base object to augment.
      var self = baseObj;

      // Animations
      self.advanceAnimationFrame = function () {
        var currentAnimation = self.animationMap[ self.currentAniName ];
        var length = currentAnimation.framesArray.length;
        self.currentAniFrame = ( self.currentAniFrame + 1 ) % length;
      };
      self.getAnimationMap = function () {
        return jobsData[ self.jobName ].animationMap;
      };
      self.isLastAnimationFrame = function () {
        var currentAnimation = self.animationMap[ self.currentAniName ];
        var length = currentAnimation.framesArray.length;
        return ( self.currentAniFrame === length - 1 );
      };
      self.setAnimation = function ( animationName ) {
        var currentAnimation = self.animationMap[ animationName ];
        if ( !currentAnimation ) {
          throw new Error( 'Invalid animation name!' );
        }
        self.currentAniFrame = 0;
        self.currentAniName = animationName;
      };

      // ATB
      self.addAtbProgress = function ( progressToAdd ) {
        self.atbProgress += progressToAdd;
        if ( self.atbProgress >= self.atbMax ) {
          self.atbProgress = self.atbMax;
        } 
      };
      self.getAtbProgress = function () {
        return self.atbProgress;
      };
      self.getAtbSpeed = function () {
        return self.atbSpeed;
      };
      self.isAtbReady = function () {
        return self.atbProgress >= self.atbMax;
      };

      // Dev Stats
      self.getArtistStat = function () {
        return self.art;
      };
      self.getCoderStat = function () {
        return self.cod;
      };
      self.getDesignerStat = function () {
        return self.dsn;
      };
      self.getPrConsultantStat = function () {
        return self.pr;
      };
      self.getProducerStat = function () {
        return self.prd;
      };
      self.getTesterStat = function () {
        return self.qa;
      };

      // Hire Cost
      self.getHireCost = function () {
        return self.hireCost;
      };

      // HP
      self.doDamage = function ( damageHp ) {
        self.currentHp += damageHp;
        if ( self.currentHp < 0 ) {
          self.currentHp = 0;
        }
      };
      self.doHealing = function ( healHp ) {
        self.currentHp += healHp;
        var maxHp = self.getMaxHp();
        if ( self.currentHp > maxHp ) {
          self.currentHp = maxHp;
        }
      };
      self.getCurrentHp = function () {
        return self.currentHp;
      };
      self.getMaxHp = function () {
        return self.maxHP;
      };
      self.isHpCritical = function () {
        return self.currentHp < ( 0.4 * self.maxHp );
      };
      self.isHpHurt = function () {
        return self.currentHp >= ( 0.4 * self.maxHp );
      };
      self.isHpSafe = function () {
        return self.currentHp >= ( 0.7 * self.maxHp );
      };

      // Name
      self.getName = function () {
        return self.person.name;
      };

      // XP
      self.getXp = function () {
        return self.xp;
      };

      // Init
      ( function init () {

        // Animation
        self.currentAniFrame = 0;
        self.currentAniName = 'idle';

        // ATB
        if ( !self.atbSpeed || !parseInt( self.atbSpeed ) ) {
          self.atbSpeed = 10;
        }

        // Dev Stats
        if ( !self.art || !parseInt( self.art ) ) {
          self.art = 10;
        }
        if ( !self.cod || !parseInt( self.cod ) ) {
          self.cod = 10;
        }
        if ( !self.dsn || !parseInt( self.dsn ) ) {
          self.dsn = 10;
        }
        if ( !self.pr || !parseInt( self.pr ) ) {
          self.pr = 10;
        }
        if ( !self.prd || !parseInt( self.prd ) ) {
          self.prd = 10;
        }
        if ( !self.qa || !parseInt( self.qa ) ) {
          self.qa = 10;
        }

        // Fun
        if ( !self.fun || !parseInt( self.fun ) ) {
          self.fun = 30;
        }

        // Hire Cost
        if ( !self.hireCost || !parseInt( self.hireCost ) ) {
          self.hireCost = 10;
        }

        // HP
        if ( !self.maxHP || !parseInt( self.maxHP ) ) {
          self.maxHP = 30;
        }

        // Job
        if ( !self.jobName || typeof( self.jobName ) !== 'string' ) {
          throw new Error( 'Invalid jobName!' );
        }

        // Name
        if ( !self.name || typeof( self.name ) !== 'string' ) {
          self.name = 'ENEMY';
        }
        else {
          if ( self.name.length > 6 ) {
            self.name = self.name.substring( 0, 7 );
          }
          self.name = self.name.toUpperCase();
        }

        // XP
        if ( !self.xp || !parseInt( self.xp ) ) {
          self.xp = 30;
        }

      } )();

      // Export
      return self;

    };
  
  } );