'use strict';

(function () {

  /* @ngInject */
  function shotgun($q, $timeout) {
    function Shotgun() {
      var ammo = 2;

      this.fire = function () {
        var defer = $q.defer();
        if (ammo > 1) {
          ammo--;
          $timeout(function () {
            defer.resolve('successfully shot shotgun');
          }, 10);
        } else {
          defer.reject('failed to shoot shotgun, no ammo.');
        }
        return defer.promise;
      };

      this.reload = function () {
        ammo = 2;
      };
    }

    return Shotgun;
  }

  angular
    .module('catWarsApp')
    .factory('Shotgun', shotgun);

})();
