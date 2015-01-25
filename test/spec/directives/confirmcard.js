'use strict';

describe('Directive: confirmcard', function () {

  // load the directive's module
  beforeEach(module('globalgamejam2015App'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<confirmcard></confirmcard>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the confirmcard directive');
  }));
});
