'use strict';

describe('Service: Sprintdata', function () {

  // load the service's module
  beforeEach(module('Globalgamejam2015App'));

  // instantiate service
  var Sprintdata;
  beforeEach(inject(function (_Sprintdata_) {
    Sprintdata = _Sprintdata_;
  }));

  it('should do something', function () {
    expect(!!Sprintdata).toBe(true);
  });

});
