'use strict';

angular.module( 'globalgamejam2015App', [
  'ngSanitize',
  'ui.router'
] )
.config( function ( $stateProvider, $urlRouterProvider ) {
  
  $stateProvider
    .state( 'cancelled', {
      url: '/cancelled', 
      templateUrl: 'views/cancelled.html',
      controller: 'CancelledCtrl'
    } )
    .state( 'menu', {
      url: '/menu',
      templateUrl: 'views/menu.html',
      controller: 'MenuCtrl'
    } )
    .state( 'menu.credits', {
      url: '/credits',
      templateUrl: 'views/menu.credits.html',
      controller: 'MenuCreditsCtrl'
    } )
    .state( 'menu.concept', {
      url: '/concept', 
      templateUrl: 'views/concept.html',
      controller: 'ConceptCtrl'
    } )
    .state( 'menu.instructions', {
      url: '/instructions',
      templateUrl: 'views/menu.instructions.html',
      controller: 'MenuInstructionsCtrl'
    } )
    .state( 'menu.main', {
      url: '/main',
      templateUrl: 'views/menu.main.html',
      controller: 'MenuMainCtrl'
    } )
    .state( 'planning', {
      url: '/planning', 
      templateUrl: 'views/planning.html',
      controller: 'PlanningCtrl'
    } )
    .state( 'planning.build', {
      url: '/build', 
      templateUrl: 'views/planning.build.html',
      controller: 'PlanningBuildCtrl'
    } )
    .state( 'planning.project', {
      url: '/project', 
      templateUrl: 'views/planning.project.html',
      controller: 'PlanningProjectCtrl'
    } )
    .state( 'planning.sprint', {
      url: '/sprint', 
      templateUrl: 'views/planning.sprint.html',
      controller: 'PlanningSprintCtrl'
    } )
    .state( 'planning.team', {
      url: '/team', 
      templateUrl: 'views/planning.team.html',
      controller: 'PlanningTeamCtrl'
    } )
    .state( 'released', {
      url: '/released', 
      templateUrl: 'views/released.html',
      controller: 'ReleasedCtrl'
    } )
    .state( 'sprint', {
      url: '/sprint', 
      templateUrl: 'views/sprint.html',
      controller: 'SprintCtrl'
    } );

  $urlRouterProvider.otherwise( '/menu/main' );

} );