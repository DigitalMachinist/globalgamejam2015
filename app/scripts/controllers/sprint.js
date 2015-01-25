'use strict';

angular
  .module( 'globalgamejam2015App' )
  .controller( 'SprintCtrl', function ( $scope, $rootScope, $state, gameData, devsData, sprintData, 
    enemyData, gameLoop, $timeout ) {

    // Event Handlers

    $scope.onAbilityClicked = function ( ability ) {
      //console.log( 'onAbilityClicked' );
      if ( $scope.actionInProgress && $scope.actionDev ) {
        $scope.actionAbility = ability;
      }
    };

    $scope.onAbilityHovered = function ( ability ) {
      //console.log( 'onAbilityHovered' );
      if ( $scope.actionInProgress && $scope.actionDev ) {
        $scope.selectedAbility = ability;
      }
    };

    $scope.onDevClicked = function ( dev ) {
      //console.log( 'onDevClicked' );
      if ( $scope.actionInProgress && $scope.actionDev ) {
        $scope.actionTarget = dev;
      }
    };

    $scope.onDevHovered = function ( dev ) {
      //console.log( 'onDevHovered' );
      if ( dev.currentAniName === 'idle' ) {
        dev.setAnimation( 'win' );
      }
    };

    $scope.onDevUnhovered = function ( dev ) {
      console.log( 'onDevHovered' );
      if ( dev.currentAniName === 'win' ) {
        dev.setAnimation( 'idle' );
      }
    };

    $scope.onEnemyClicked = function ( enemy ) {
      //console.log( 'onEnemyClicked' );
      if ( $scope.actionInProgress && $scope.actionDev ) {
        $scope.actionTarget = enemy;
      }
    };

    $scope.onEnemyHovered = function ( enemy ) {
      //console.log( 'onEnemyHovered' );
      if ( $scope.actionInProgress && $scope.actionDev ) {
        $scope.selectedEnemy = enemy;
      }
    };

    // Helpers
    $scope.isWaiting = function ( actor ) {
      for ( var i = 0; i < $scope.waiting.length; i++ ) {
        if ( actor === $scope.waiting[ i ].data ) {
          return true;
        }
      }
      return false;
    };

    // Action Start Button
    $scope.onActionStartButtonClicked = function () {

      if ( !$scope.actionInProgress || !$scope.actionAbility || 
        !$scope.actionDev || !$scope.actionTarget ) {
        return;
      }

      var ability = $scope.actionAbility;
      var target = $scope.actionTarget;

      //console.log( $scope.waiting );

      $scope.actionDev.atbProgress = 0;
      $scope.actionDev.isActing = true;
      $scope.actionDev.setAnimation( 'walk' );
      $scope.instructions = $scope.actionDev.getName() + ' uses ' + 
        ability.name + ' on ' + target.getName() + '!';
      $timeout( function () {

        $scope.actionDev.setAnimation( 'attack' );
        $timeout( function () {

          ability.abilityFn( $scope.actionDev, target, ability, $scope, $rootScope );
          $timeout( function () {

            $scope.$apply();
            $scope.actionDev.isActing = false;
            $scope.actionDev.setAnimation( 'walk' );
            $timeout( function () {

              $scope.actionDev.setAnimation( 'idle' );
              $scope.actionAbility = null;
              $scope.actionDev = null;
              $scope.actionTarget = null;
              $scope.waitingActor = null;
              $scope.actionInProgress = false;

              console.log( target.getCurrentHp() );

            }, 500 );

          }, 500 );

        }, 500 );

      }, 500 );

    }; 

    // $rootScope Event Handlers
    $scope.$on( 'readyDev', function ( event, dev ) {
      $scope.instructions = dev.getName() + ' is ready to go!';
      if ( !$scope.isWaiting( dev ) ) {
        $scope.waiting.push( {
          type: 'dev',
          data: dev 
        } );
      }
    } );
    $scope.$on( 'readyEnemy', function ( event, enemy ) {
      $scope.instructions = enemy.getName() + ' is about to attack!';
      if ( !$scope.isWaiting( enemy ) ) {
        $scope.waiting.push( {
          type: 'enemy',
          data: enemy 
        } );
      }
    } );

    // Update
    $scope.$on( 'update', function () {

      // Is the fight over?
      var count = 0;
      for ( var i = 0; i < $scope.enemies.length; i++ ) {
        if ( $scope.enemies[ i ].empty ) {
          count++;
        }
      }
      if ( count >= 4 ) {
        for ( i = 0; i < $scope.devs.length; i++ ) {
          if ( !$scope.devs[ i ].empty ) {
            $scope.devs[ i ].currentHp = $scope.devs[ i ].getMaxHp();
          }
        }
        gameData.game.currentMonth += sprintData.selectedSprint.getLength();
        gameData.game.add$$$( sprintData.selectedSprint.getPayout() );
        $state.go( 'planning.project' );
      }

      // Advance animation frames and remove dead things.
      for ( i = 0; i < $scope.devs.length; i++ ) {
        if ( !$scope.devs[ i ].empty ) {
          $scope.devs[ i ].advanceAnimationFrame();
          if ( $scope.devs[ i ].getCurrentHp() <= 0 ) {
            $scope.devs[ i ] = devsData.getEmptyDev();
          }
        }
      }
      for ( i = 0; i < $scope.enemies.length; i++ ) {
        if ( !$scope.enemies[ i ].empty ) {
          $scope.enemies[ i ].advanceAnimationFrame();
          if ( $scope.enemies[ i ].getCurrentHp() <= 0 ) {
            for ( var j = 0; j < $scope.devs.length; j++ ) {
              if ( !$scope.devs[ j ].empty ) {
                $scope.devs[ i ].gainXp( $scope.enemies[ j ].xp );
              }
            }
            $scope.enemies[ i ] = enemyData.getEmptyEnemy();
          }
        }
      }

      // If an action/animation is in progress, abort the update here.
      if ( $scope.actionInProgress ) {
        return;
      }

      // Do a player action and abort the update if one starts.
      if ( $scope.waiting.length > 0 && 
        $scope.waiting[ 0 ].type === 'dev' ) {

        // Remove the enemy from the waiting queue and signal that an action 
        // is being chosen by the player and the cycle needs to wait.
        var dev = $scope.waiting.shift().data;
        $scope.actionDev = dev;
        $scope.actionTarget = null;
        $scope.waitingActor = dev;
        $scope.actionInProgress = true;

      }

      // Do an enemy action and abort the update here if one starts.
      if ( $scope.waiting.length > 0 && $scope.waiting[ 0 ].type === 'enemy' ) {
        
        // Remove the enemy from the waiting queue and signal that an action 
        // is now playing and the cycle needs to wait for it to complete.
        var enemy = $scope.waiting.shift().data;

        // Enemy AI (ability and target selection).
        var randomTargetIndex = Math.floor( Math.random() * devsData.getNumDevs() );
        var randomTarget = null;
        do {
          randomTarget = $scope.devs[ randomTargetIndex ];
        } while ( randomTarget.empty );
        var randomAbilityIndex = Math.floor( Math.random() * enemy.job.abilitiesArray.length );
        var randomAbility = enemy.job.abilitiesArray[ randomAbilityIndex ];

        // Start an enemy action animation running.
        enemy.isActing = true;
        $scope.actionEnemy = enemy;
        $scope.actionTarget = randomTarget;
        $scope.waitingActor = enemy;
        $scope.actionInProgress = true;
        $scope.instructions = enemy.getName() + ' uses ' + 
          randomAbility.name + ' on ' + randomTarget.getName() + '!';
        $timeout( function () {

          randomAbility.abilityFn( enemy, randomTarget, randomAbility, $scope, $rootScope );

          $timeout( function () {

            enemy.isActing = false;
            enemy.atbProgress = 0;
            $scope.actionAbility = null;
            $scope.actionEnemy = null;
            $scope.actionTarget = null;
            $scope.waitingActor = null;
            $scope.actionInProgress = false;

          }, 500 );

        }, 1000 );
      }

      // ONLY DO THE FOLLOWING IF NOT WAITING FOR ACTION
      if ( !$scope.waitingActor && $scope.waiting.length < 1 ) {

        // Advance ATB gauges
        for ( i = 0; i < $scope.devs.length; i++ ) {
          if ( !$scope.devs[ i ].empty ) {
            $scope.devs[ i ].advanceAtb();
          }
        }
        for ( i = 0; i < $scope.enemies.length; i++ ) {
          if ( !$scope.enemies[ i ].empty ) {
            $scope.enemies[ i ].advanceAtb();
          }
        }

      }

    } );

    // Init
    ( function init () {

      // Redirect the user back to the main menu if their game isn't initalized.
      if ( !gameData.game ) {
        $state.go( 'menu.main' );
      }
      else {

        // Wait briefly before starting up combat.
        $timeout( function () {
          gameLoop.startUpdate( 100 );
        }, 1000 );

        $scope.actionInProgress = false;
        $scope.instructions = 'FIGHT START!';

        $scope.waiting = [];

        $scope.devs = devsData.devs;
        $scope.enemies = sprintData.selectedSprint.enemies;

        $scope.devsData = devsData;
        $scope.enemyData = enemyData;
        $scope.gameData = gameData;
        $scope.sprintData = sprintData;

        $scope.selectedAbility = $scope.devs[ 0 ].abilities[ 0 ];
        $scope.selectedDev = $scope.devs[ 0 ];
        $scope.selectedEnemy = $scope.enemies[ 0 ];

        $scope.actionAbility = null;
        $scope.actionDev = null;
        $scope.actionTarget = null;

        $scope.waitingActor = null;

        // Randomize ATB values
        for ( var i = 0; i < $scope.devs.length; i++ ) {
          if ( !$scope.devs[ i ].empty ) {
            $scope.devs[ i ].atbProgress = Math.floor( Math.random() * 800 );
          }
        }
        for ( i = 0; i < $scope.enemies.length; i++ ) {
          if ( !$scope.enemies[ i ].empty ) {
            $scope.enemies[ i ].atbProgress = Math.floor( Math.random() * 800 );
          }
        }

        console.log( $scope.enemies[ 0 ].getCurrentHp() );

      }

    } )();

  } );