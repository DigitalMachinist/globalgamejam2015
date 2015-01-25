'use strict';

angular
  .module( 'globalgamejam2015App' )
  .factory( 'enemyJobData', function ( EnemyJob, Ability, Animation ) {
    
    // Create the base object to augment.
    var self = {};

    // Init
    
    ( function init () {

        self.attackAbilityFn = function ( enemy, target, ability, $scope, $rootScope ) {
          var isMiss = ( Math.random() > 0.8 );
          if ( isMiss ) {
            $scope.instructions = enemy.getName() + ' misses! ' + 
              target.getName() + ' snickers.';
            return;
          }
          var targetJob = target.getInitialJobName().toLowerCase();
          var attackStat = enemy[ targetJob ];
          var damage = 0.5 * ( 0.5 * attackStat * Math.random() + attackStat );
          var isCritical = ( Math.random() > 0.8 );
          if ( isCritical ) {
            var multiplier = 1 + Math.random();
            damage *= multiplier;
          }
          var finalDamage = Math.round( damage );
          target.doDamage( finalDamage ); 
          if ( isCritical ) {
            $scope.instructions = enemy.getName() + ' scored a crit! ' + 
              target.getName() + ' takes ' + finalDamage + ' damage.';
          }
          else {
            $scope.instructions = enemy.getName() + ' hit! ' + 
              target.getName() + ' takes ' + finalDamage + ' damage.';
          }
          $rootScope.$apply();
        };

        self.attackAbility = new Ability(
          'ATTACK', 
          '', 
          '', 
          1, 
          'Use the pointy end.', 
          self.attackAbilityFn
        );

      self.enemyJobsMap = {

        'BUG': new EnemyJob(
          'BUG',
          [
            self.attackAbility, 
            new Ability(
              'EXCEPTION',
              'BUG', 
              '', 
              100, 
              'Description',
              self.attackAbilityFn
            ),
            new Ability(
              'NULL REFERENCE',
              'BUG', 
              '', 
              100, 
              'Description',
              self.attackAbilityFn
            ),
            new Ability(
              'CLIPPING',
              'BUG', 
              '', 
              100, 
              'Description',
              self.attackAbilityFn
            )
          ],
          {
            'idle': new Animation(
              'idle',
              [ 'enemy-sprite-bug' ]
            )
          }
        ),

        'CLN': new EnemyJob(
          'CLN',
          [
            self.attackAbility, 
            new Ability(
              'LAWYER UP',
              'CLN', 
              '', 
              100, 
              'Description',
              self.attackAbilityFn
            ),
            new Ability(
              'ERODE USERBASE',
              'CLN', 
              '', 
              100, 
              'Description',
              self.attackAbilityFn
            ),
            new Ability(
              'PIRATE',
              'CLN', 
              '', 
              100, 
              'Description',
              self.attackAbilityFn
            )
          ],
          {
            'idle': new Animation(
              'idle',
              [ 'enemy-sprite-cln' ]
            )
          }
        ),

        'CRT': new EnemyJob(
          'CRT',
          [
            self.attackAbility, 
            new Ability(
              'EXPOSE',
              'CRT', 
              '', 
              100, 
              'Description',
              self.attackAbilityFn
            ),
            new Ability(
              'TWITTER MOB',
              'CRT', 
              '', 
              100, 
              'Description',
              self.attackAbilityFn
            ),
            new Ability(
              'LUCKY BREAK',
              'CRT', 
              '', 
              100, 
              'Description',
              self.attackAbilityFn
            )
          ],
          {
            'idle': new Animation(
              'idle',
              [ 'enemy-sprite-crt' ]
            )
          }
        ),

        'CSL': new EnemyJob(
          'CSL',
          [
            self.attackAbility, 
            new Ability(
              '1-STAR REVIEW',
              'CSL', 
              '', 
              100, 
              'Description',
              self.attackAbilityFn
            ),
            new Ability(
              'F2P',
              'CSL', 
              '', 
              100, 
              'Description',
              self.attackAbilityFn
            ),
            new Ability(
              'RACE TO THE BOTTOM',
              'CSL', 
              '', 
              100, 
              'Description',
              self.attackAbilityFn
            )
          ],
          {
            'idle': new Animation(
              'idle',
              [ 'enemy-sprite-csl' ]
            )
          }
        ),

        'EXE': new EnemyJob(
          'EXE',
          [
            self.attackAbility, 
            new Ability(
              'SCOPE CREEP',
              'EXE', 
              '', 
              100, 
              'Description',
              self.attackAbilityFn
            ),
            new Ability(
              'YOU\'RE FIRED',
              'EXE', 
              '', 
              100, 
              'Description',
              self.attackAbilityFn
            ),
            new Ability(
              'BRIGHT IDEA',
              'EXE', 
              '', 
              100, 
              'Description',
              self.attackAbilityFn
            )
          ],
          {
            'idle': new Animation(
              'idle',
              [ 'enemy-sprite-exe' ]
            )
          }
        ),

        'HRD': new EnemyJob(
          'HRD',
          [
            self.attackAbility, 
            new Ability(
              'HARASS',
              'HRD', 
              '', 
              100, 
              'Description',
              self.attackAbilityFn
            ),
            new Ability(
              'DOX MOB',
              'HRD', 
              '', 
              100, 
              'Description',
              self.attackAbilityFn
            ),
            new Ability(
              'STEAM SALE',
              'HRD', 
              '', 
              100, 
              'Description',
              self.attackAbilityFn
            )
          ],
          {
            'idle': new Animation(
              'idle',
              [ 'enemy-sprite-hrd' ]
            )
          }
        )

      };

    } )();

    // Export
    return self;

  } );