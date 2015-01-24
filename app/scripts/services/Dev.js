'use strict';

angular
	.module( 'globalgamejam2015App' )
  .factory( 'Dev', function Dev( jobsData ) {

  	return function Dev( person, jobLevelsArray ) {

  		// Validate arguments.
  		if ( !person || typeof( person !== 'object' ) ) {
  			throw new Error( 'Invalid person!' );
  		}
  		if ( !jobLevelsArray || !jobLevelsArray instanceof Array || jobLevelsArray.length < 1 ) {
  			throw new Error( 'Invalid jobLevelsArray!' );
  		}

  		// Create the base object to augment.
	  	var self = {};

	  	// Animations
      self.advanceAnimationFrame = function () {
        var currentAnimation = self.animationMap[ self.currentAniName ];
        var length = currentAnimation.framesArray.length;
        self.currentAniFrame = ( self.currentAniFrame + 1 ) % length;
      };
      self.getAnimationMap = function () {
	  		return jobsData[ self.jobLevels[ 0 ].jobName ].animationMap;
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

	  	// Enemy Stats
	  	self.getBugStat = function () {
	  		return self.jobLevels.reduce( sumProperty( 'bug' ) );
	  	};
	  	self.getCasualStat = function () {
	  		return self.jobLevels.reduce( sumProperty( 'csl' ) );
	  	};
	  	self.getCloneStat = function () {
	  		return self.jobLevels.reduce( sumProperty( 'cln' ) );
	  	};
	  	self.getCriticStat = function () {
	  		return self.jobLevels.reduce( sumProperty( 'crt' ) );
	  	};
	  	self.getExecutiveStat = function () {
	  		return self.jobLevels.reduce( sumProperty( 'exe' ) );
	  	};
	  	self.getHardcoreStat = function () {
	  		return self.jobLevels.reduce( sumProperty( 'hrd' ) );
	  	};

      // Hire Cost
      self.getHireCost = function () {
        return self.jobLevels.reduce( sumProperty( 'hireCost' ) );
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
	  		return self.jobLevels.reduce( sumProperty( 'hp' ) );
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

	    // Jobs
	    self.getInitialJob = function () {
	    	return self.jobLevels[ 0 ].job;
	    };
	    self.getJobLevels = function () {
	    	return self.jobLevels;
	    };

	  	// Name
	  	self.getName = function () {
	  		return self.person.name;
	  	};

	  	// Person
	  	self.getPerson = function () {
	  		return self.person;
	  	};

      // XP
      self.gainXp = function ( xpToAdd ) {
        self.addXp += xpToAdd;
        if ( self.xp > 999 ) {
          self.xp = 999;
        }
      };
      self.getXp = function () {
        return self.xp;
      };
      self.spendXp = function ( xpToSpend ) {
        if ( xpToSpend > self.xp ) {
          return false;
        }
        self.xp -= xpToSpend;
        if ( self.xp > 0 ) {
          self.xp = 0;
        }
        return true;
      };

	  	// Helpers
	  	function sumProperty ( propertyName ) {
	  		return function ( total, obj ) {
	  			return total + obj[ propertyName ];
	  		};
	  	}

	  	// Init
	  	( function init () {

        self.atbMax = 1000;
		  	self.atbProgress = 0;
		  	self.atbSpeed = 10;
        self.currentAniFrame = 0;
        self.currentAniName = 'idle';
		  	self.currentHp = self.getMaxHp();
		  	self.jobLevels = jobLevelsArray;
	  		self.person = person;
        self.xp = 0;

	  	} )();

	  	// Export
    	return self;

    };
    
  } );