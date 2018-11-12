(function () {
"use strict";

angular.module('public')
.controller('RegistrationController', RegistrationController);

RegistrationController.$inject = ['$state','MenuService','RegistrationService'];

function RegistrationController($state,MenuService,RegistrationService) {
  var registrationCtrl = this;
  registrationCtrl.validFavouriteDish = true;
  registrationCtrl.completed = false;
  registrationCtrl.submit = function () {

    console.log(registrationCtrl.user);
    MenuService.getFavouriteDish(registrationCtrl.user.favouriteDish).then(function(response) {
        console.log(response);
        registrationCtrl.validFavouriteDish = true;
        registrationCtrl.completed = true;
        RegistrationService.saveUserPreferences(registrationCtrl.user)

    },
    function(response) {
        console.log(response);
        registrationCtrl.validFavouriteDish = false;
    }

    );
  };
}

})();