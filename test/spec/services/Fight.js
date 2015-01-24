'use strict';

describe('Service: Fight', function () {

  // load the service's module
  beforeEach(module('Globalgamejam2015App'));

  // instantiate service
  var Fight;
  beforeEach(inject(function (_Fight_) {
    Fight = _Fight_;
  }));

  it('should do something', function () {
    expect(!!Fight).toBe(true);
  });

});
