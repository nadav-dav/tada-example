'use strict';

(function () {

  /* @ngInject */
  function catFactory() {
    function Cat(weapon) {
      this.fireWeapon = function () {
        return weapon.fire().then(function (weaponSuccessStatus) {
          return 'Cat ' + weaponSuccessStatus;
        }, function (weaponFailedStatus) {
          return 'Cat ' + weaponFailedStatus;
        });
      };
    }

    return Cat;
  }

  angular
    .module('catWarsApp')
    .factory('Cat', catFactory);

})();
