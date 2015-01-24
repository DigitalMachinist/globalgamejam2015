'use strict';

describe('Controller: PlanningTeamCtrl', function () {

  // load the controller's module
  beforeEach(module('globalgamejam2015App'));

  var PlanningTeamCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PlanningTeamCtrl = $controller('PlanningTeamCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
