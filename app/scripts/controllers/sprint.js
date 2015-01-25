'use strict';

angular
  .module( 'globalgamejam2015App' )
  .controller( 'SprintCtrl', function ( $scope, $state, gameData, devsData, sprintData, 
    enemyData, gameLoop, $timeout ) {

    // Event Handlers

    $scope.onAbilityClicked = function ( ability ) {
      console.log( 'onAbilityClicked' );
      $scope.actionAbility = ability;
    };

    $scope.onAbilityHovered = function ( ability ) {
      console.log( 'onAbilityHovered' );
      $scope.selectedAbility = ability;
    };

    $scope.onActionStartButtonClicked = function ( actor ) {

      if ( !$scope.isWaiting( actor ) ) {
        return;
      }

      console.log( 'ACTION BY: ', actor );

    };

    $scope.onChangeDevArrowClicked = function ( direction ) {
      console.log( 'onChangeDevArrowClicked' );
      var count = 0;
      for ( var i = 0; i < $scope.devs.length; i++ ) {
        count++;
        if ( $scope.devs[ i ].empty ) {
          break;
        }
      }
      var index = $scope.devs.indexOf( $scope.selectedDev );
      var newIndex = index;
      if ( direction === 'left' ) {
        newIndex = ( newIndex + 1 ) % count;
      }
      else if ( direction === 'right' ) {
        newIndex = ( newIndex - 1 < 0 ) ? 3 : newIndex - 1;
      }
      $scope.selectedDev = $scope.devs[ newIndex ];
    };

    $scope.onDevClicked = function ( dev ) {
      console.log( 'onDevClicked' );
      $scope.actionDev = dev;
    };

    $scope.onDevHovered = function ( dev ) {
      console.log( 'onDevHovered' );
      $scope.selectedDev = dev;
      if ( $scope.selectedDev.currentAniName === 'idle' ) {
        $scope.selectedDev.setAnimation( 'win' );
      }
      return dev;
    };

    $scope.onDevUnhovered = function ( dev ) {
      console.log( 'onDevHovered' );
      if ( $scope.selectedDev.currentAniName === 'win' ) {
        $scope.selectedDev.setAnimation( 'idle' );
      }
      return dev;
    };

    $scope.onEnemyClicked = function ( enemy ) {
      console.log( 'onEnemyClicked' );
      $scope.actionEnemy = enemy;
      return enemy;
    };

    $scope.onEnemyHovered = function ( enemy ) {
      console.log( 'onEnemyHovered' );
      $scope.selectedEnemy = enemy;
      return enemy;
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

    // Update

    $scope.$on( 'readyDev', function ( dev ) {

      console.log( 'Dev is ready to act!' );

      $scope.waiting.push( {
        type: 'dev',
        data: dev 
      } );

    } );

    $scope.$on( 'readyEnemy', function ( enemy ) {

      console.log( 'Enemy is ready to act!' );

      $scope.waiting.push( {
        type: 'dev',
        data: enemy 
      } );

    } );

    $scope.$on( 'update', function () {

      //console.log( devsData.devs[ 0 ].getCurrentAniClass() );

      for ( var i = 0; i < $scope.devs.length; i++ ) {
        if ( !$scope.devs[ i ].empty ) {
          $scope.devs[ i ].advanceAnimationFrame();
          if ( $scope.waiting.length < 1 ) {
            $scope.devs[ i ].advanceAtb();
          }
        }
      }

      for ( i = 0; i < $scope.enemies.length; i++ ) {
        if ( !$scope.enemies[ i ].empty ) {
          $scope.enemies[ i ].advanceAnimationFrame();
          if ( $scope.waiting.length < 1 ) {
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
        $scope.actionDev = $scope.selectedDev;
        $scope.actionEnemy = null;

        console.log( $scope.selectedDev.getAtbProgress() );

        //console.log( devsData.devs[ 0 ].getInitialJobName() );
        //console.log( devsData.devs[ 1 ].getInitialJobName() );
        //console.log( devsData.devs[ 2 ].getInitialJobName() );
        //console.log( devsData.devs[ 3 ].getInitialJobName() );

        // devsData.devs[ 0 ].setAnimation( 'attack' );

      }

    } )();

  } );