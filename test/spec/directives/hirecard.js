'use strict';

describe('Directive: hirecard', function () {

  // load the directive's module
  beforeEach(module('globalgamejam2015App'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<hirecard></hirecard>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the hirecard directive');
  }));
});
