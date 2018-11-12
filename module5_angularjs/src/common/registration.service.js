(function () {
"use strict";

angular.module('common')
.service('RegistrationService', RegistrationService);



function RegistrationService() {
  var service = this;

  service.saveUserPreferences = function (userPreferences) {
    service.userPreferences = userPreferences;
    console.log('userPreferences', service.userPreferences )
  };

  service.getUserPreferences = function () {
    return service.userPreferences ;
  };



}



})();
