(function () {
"use strict";

angular.module('public')
.controller('UserPreferencesController', UserPreferencesController);

UserPreferencesController.$inject = ['userPreferences'];

function UserPreferencesController(userPreferences) {
  var userPreferencesCtrl = this;
  userPreferencesCtrl.userPreferences = userPreferences;
  console.log(userPreferences);

}

})();