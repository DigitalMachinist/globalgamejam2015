'use strict';

describe('Service: Featuresdata', function () {

  // load the service's module
  beforeEach(module('Globalgamejam2015App'));

  // instantiate service
  var Featuresdata;
  beforeEach(inject(function (_Featuresdata_) {
    Featuresdata = _Featuresdata_;
  }));

  it('should do something', function () {
    expect(!!Featuresdata).toBe(true);
  });

});
