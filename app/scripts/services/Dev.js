'use strict';

angular
	.module( 'globalgamejam2015App' )
  .factory( 'Dev', function Dev( jobsData, $rootScope ) {

  	return function Dev( person, jobLevelsArray, abilitiesArray ) {

  		// Validate arguments.
  		if ( !person || typeof( person ) !== 'object' ) {
  			throw new Error( 'Invalid person!' );
  		}
  		if ( !jobLevelsArray || !jobLevelsArray instanceof Array || jobLevelsArray.length < 1 ) {
  			throw new Error( 'Invalid jobLevelsArray!' );
  		}

  		// Create the base object to augment.
	  	var self = {};

      // Abilities
      self.hasAbility = function ( jobName, abilityName ) {

        for ( var i = 0; i < self.abilities.length; i++ ) {
          if ( jobName === self.abilities[ i ].jobName && abilityName === self.abilities[ i ].name ) {
            return true;
          }
        }

      };

	  	// Animations
      self.advanceAnimationFrame = function () {
        var currentAnimation = self.getAnimationMap()[ self.currentAniName ];
        var length = currentAnimation.framesArray.length;
        self.currentAniFrame = ( self.currentAniFrame + 1 ) % length;
      };
      self.getAnimationMap = function () {
        var initialJobName = self.jobLevels[ 0 ].jobName;
        var aniMap = jobsData.jobsMap[ initialJobName ].animationMap;
	  		return aniMap;
	  	};
      self.getCurrentAniClass = function () {
        var aniMap = self.getAnimationMap();
        var aniArray = aniMap[ self.currentAniName ].framesArray;
        var aniClass = aniArray[ self.currentAniFrame ];
        return aniClass;
      };
      self.isLastAnimationFrame = function () {
        var currentAnimation = self.getAnimationMap()[ self.currentAniName ];
        var length = currentAnimation.framesArray.length;
        return ( self.currentAniFrame === length - 1 );
      };
      self.setAnimation = function ( animationName ) {
        var currentAnimation = self.getAnimationMap()[ animationName ];
        if ( !currentAnimation ) {
          throw new Error( 'Invalid animation name!' );
        }
        self.currentAniFrame = 0;
        self.currentAniName = animationName;
      };

	  	// ATB
	  	self.advanceAtb = function () {
        self.atbProgress += self.atbSpeed;
        if ( self.atbProgress >= self.atbMax ) {
          self.atbProgress = self.atbMax;
        } 
        if ( self.isAtbReady() ) {
          $rootScope.$broadcast( 'readyDev', self );
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
        var total = self.person.bug;
        for ( var i = 0; i < self.jobLevels.length; i++ ) {
          total += self.jobLevels[ i ].bug;
        }
        return total;
	  	};
	  	self.getCasualStat = function () {
        var total = self.person.csl;
        for ( var i = 0; i < self.jobLevels.length; i++ ) {
          total += self.jobLevels[ i ].csl;
        }
        return total;
	  	};
	  	self.getCloneStat = function () {
        var total = self.person.cln;
        for ( var i = 0; i < self.jobLevels.length; i++ ) {
          total += self.jobLevels[ i ].cln;
        }
        return total;
	  	};
	  	self.getCriticStat = function () {
        var total = self.person.crt;
        for ( var i = 0; i < self.jobLevels.length; i++ ) {
          total += self.jobLevels[ i ].crt;
        }
        return total;
	  	};
	  	self.getExecutiveStat = function () {
        var total = self.person.exe;
        for ( var i = 0; i < self.jobLevels.length; i++ ) {
          total += self.jobLevels[ i ].exe;
        }
        return total;
	  	};
	  	self.getHardcoreStat = function () {
        var total = self.person.hrd;
        for ( var i = 0; i < self.jobLevels.length; i++ ) {
          total += self.jobLevels[ i ].hrd;
        }
        return total;
	  	};

      // Hire Cost
      self.getHireCost = function () {
        var total = 0;
        for ( var i = 0; i < self.jobLevels.length; i++ ) {
          total += self.jobLevels[ i ].hireCost;
        }
        return total;
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
        //console.log( self.jobLevels );
        var total = 0;
        for ( var i = 0; i < self.jobLevels.length; i++ ) {
          total += self.jobLevels[ i ].maxHP;
        }
        //console.log( total );
        return total;
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
	    self.getInitialJobName = function () {
	    	return self.jobLevels[ 0 ].jobName;
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
        self.xp += xpToAdd;
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
        if ( self.xp < 0 ) {
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

        // These have to be set before anything else.
        self.jobLevels = jobLevelsArray;
        self.abilities = abilitiesArray;

        self.atbMax = 1000;
		  	self.atbProgress = 0;
		  	self.atbSpeed = 10;
        self.currentAniFrame = 0;
        self.currentAniName = 'idle';
		  	self.currentHp = self.getMaxHp();
	  		self.person = person;
        self.xp = 0;

	  	} )();

	  	// Export
    	return self;

    };
    
  } );