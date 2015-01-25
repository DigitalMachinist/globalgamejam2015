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
              'ABILITY 1',
              'BUG', 
              '', 
              100, 
              'Description',
              self.attackAbilityFn
            ),
            new Ability(
              'ABILITY 2',
              'BUG', 
              '', 
              100, 
              'Description',
              self.attackAbilityFn
            ),
            new Ability(
              'ABILITY 3',
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
              'ABILITY 1',
              'CLN', 
              '', 
              100, 
              'Description',
              self.attackAbilityFn
            ),
            new Ability(
              'ABILITY 2',
              'CLN', 
              '', 
              100, 
              'Description',
              self.attackAbilityFn
            ),
            new Ability(
              'ABILITY 3',
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
              'ABILITY 1',
              'CRT', 
              '', 
              100, 
              'Description',
              self.attackAbilityFn
            ),
            new Ability(
              'ABILITY 2',
              'CRT', 
              '', 
              100, 
              'Description',
              self.attackAbilityFn
            ),
            new Ability(
              'ABILITY 3',
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
              'ABILITY 1',
              'CSL', 
              '', 
              100, 
              'Description',
              self.attackAbilityFn
            ),
            new Ability(
              'ABILITY 2',
              'CSL', 
              '', 
              100, 
              'Description',
              self.attackAbilityFn
            ),
            new Ability(
              'ABILITY 3',
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
              'ABILITY 1',
              'EXE', 
              '', 
              100, 
              'Description',
              self.attackAbilityFn
            ),
            new Ability(
              'ABILITY 2',
              'EXE', 
              '', 
              100, 
              'Description',
              self.attackAbilityFn
            ),
            new Ability(
              'ABILITY 3',
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
              'ABILITY 1',
              'HRD', 
              '', 
              100, 
              'Description',
              self.attackAbilityFn
            ),
            new Ability(
              'ABILITY 2',
              'HRD', 
              '', 
              100, 
              'Description',
              self.attackAbilityFn
            ),
            new Ability(
              'ABILITY 3',
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