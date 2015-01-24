'use strict';

describe('Service: Peopledata', function () {

  // load the service's module
  beforeEach(module('Globalgamejam2015App'));

  // instantiate service
  var Peopledata;
  beforeEach(inject(function (_Peopledata_) {
    Peopledata = _Peopledata_;
  }));

  it('should do something', function () {
    expect(!!Peopledata).toBe(true);
  });

});
