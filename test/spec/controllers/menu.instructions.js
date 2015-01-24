'use strict';

describe('Controller: MenuInstructionsCtrl', function () {

  // load the controller's module
  beforeEach(module('globalgamejam2015App'));

  var MenuInstructionsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MenuInstructionsCtrl = $controller('MenuInstructionsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
