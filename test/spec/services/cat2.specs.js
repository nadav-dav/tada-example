'use strict';

describe('Service: cat', function () {
  var $q;
  var $rootScope;
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

  beforeEach(inject(function (Cat, _$q_, _$rootScope_, WeaponMock) {
    cat = new Cat(new WeaponMock());
    $q = _$q_;
    $rootScope = _$rootScope_;
  }));

  it('should fire the weapon and' +
  'return a success status', function () {
    var spy = jasmine.createSpy();
    cat.fireWeapon().then(spy);
    $rootScope.$digest();
    expect(spy).toHaveBeenCalledWith('Cat successfully shot a weapon');
  });

  it('should report back if failed to shoot', function () {
    fireWeaponSuccessful = false;
    var spy = jasmine.createSpy();
    cat.fireWeapon().then(spy);
    $rootScope.$digest();
    expect(spy)
      .toHaveBeenCalledWith('Cat failed to shoot weapon');
  });

});
