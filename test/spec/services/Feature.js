'use strict';

describe('Service: Feature', function () {

  // load the service's module
  beforeEach(module('Globalgamejam2015App'));

  // instantiate service
  var Feature;
  beforeEach(inject(function (_Feature_) {
    Feature = _Feature_;
  }));

  it('should do something', function () {
    expect(!!Feature).toBe(true);
  });

});
