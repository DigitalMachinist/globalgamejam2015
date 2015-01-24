'use strict';

describe('Service: Devfactory', function () {

  // load the service's module
  beforeEach(module('Globalgamejam2015App'));

  // instantiate service
  var Devfactory;
  beforeEach(inject(function (_Devfactory_) {
    Devfactory = _Devfactory_;
  }));

  it('should do something', function () {
    expect(!!Devfactory).toBe(true);
  });

});
