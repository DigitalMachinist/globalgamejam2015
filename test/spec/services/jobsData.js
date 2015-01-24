'use strict';

describe('Service: Jobsdata', function () {

  // load the service's module
  beforeEach(module('Globalgamejam2015App'));

  // instantiate service
  var Jobsdata;
  beforeEach(inject(function (_Jobsdata_) {
    Jobsdata = _Jobsdata_;
  }));

  it('should do something', function () {
    expect(!!Jobsdata).toBe(true);
  });

});
