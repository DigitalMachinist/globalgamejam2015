'use strict';

angular.module( 'globalgamejam2015App', [
  'ngSanitize',
  'ui.router'
] )
.config( function ( $stateProvider, $urlRouterProvider ) {
  
  $stateProvider.state( 'index', {
    url: '/',
    templateUrl: 'views/mainMenu.html',
    controller: 'MainCtrl'
  } )
  .state( '/sprint', {
    url: '/sprint', 
    templateUrl: 'views/sprint.html',
    controller: 'SprintCtrl'
  } )
  .state( '/concept', {
    templateUrl: 'views/concept.html',
    controller: 'ConceptCtrl'
  } )
  .state( '/cancelled', {
    templateUrl: 'views/cancelled.html',
    controller: 'CancelledCtrl'
  } )
  .state( '/planning', {
    templateUrl: 'views/planning.html',
    controller: 'PlanningCtrl'
  } )
  .state( '/released', {
    templateUrl: 'views/released.html',
    controller: 'ReleasedCtrl'
  } );
  
  $urlRouterProvider.otherwise( '/' );

} );