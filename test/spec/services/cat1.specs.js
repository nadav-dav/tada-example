'use strict';

describe('Service: cat', function () {
  var $q;
  var cat;

  beforeEach(function () {
    module('catWarsApp');
    module({
      WeaponStub: function () {
        this.fire = function () {
          var defer = $q.defer();
          defer.resolve('successfully shot a weapon');
          return defer.promise;
        };
      }
    });
  });

  beforeEach(inject(function (Cat, _$q_, WeaponStub) {
    cat = new Cat(new WeaponStub());
    $q = _$q_;
  }));

  it('should fire the weapon and' +
  'return a success status', inject(function ($timeout) {
    var spy = jasmine.createSpy();
    cat.fireWeapon().then(spy);
    $timeout.flush();
    expect(spy).toHaveBeenCalledWith('Cat successfully shot a weapon');
  }));

});
