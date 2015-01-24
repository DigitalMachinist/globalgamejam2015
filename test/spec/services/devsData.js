'use strict';

describe('Service: Devsdata', function () {

  // load the service's module
  beforeEach(module('Globalgamejam2015App'));

  // instantiate service
  var Devsdata;
  beforeEach(inject(function (_Devsdata_) {
    Devsdata = _Devsdata_;
  }));

  it('should do something', function () {
    expect(!!Devsdata).toBe(true);
  });

});
