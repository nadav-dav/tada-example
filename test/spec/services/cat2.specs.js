'use strict';

describe('Service: cat', function () {
  var $q;
  var $timeout;
  var cat;
  var fireWeaponSuccessful = true;

  beforeEach(function () {
    module('catWarsApp');
    module({
      WeaponMock: function () {
        this.fire = function () {
          var defer = $q.defer();
          if (fireWeaponSuccessful) {
            defer.resolve('successfully shot a weapon');
          } else {
            defer.reject('failed to shoot weapon');
          }
          return defer.promise;
        };
      }
    });
  });

  beforeEach(inject(function (Cat, _$q_, _$timeout_, WeaponMock) {
    cat = new Cat(new WeaponMock());
    $q = _$q_;
    $timeout = _$timeout_;
  }));

  it('should fire the weapon and' +
  'return a success status', function () {
    var spy = jasmine.createSpy();
    cat.fireWeapon().then(spy);
    $timeout.flush();
    expect(spy).toHaveBeenCalledWith('Cat successfully shot a weapon');
  });

  it('should report back if failed to shoot', function () {
    fireWeaponSuccessful = false;
    var spy = jasmine.createSpy();
    cat.fireWeapon().then(spy);
    $timeout.flush();
    expect(spy)
      .toHaveBeenCalledWith('Cat failed to shoot weapon');
  });

});
