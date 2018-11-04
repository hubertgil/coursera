(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService);


MenuDataService.$inject = ['$q', '$timeout','$http']
function MenuDataService($q, $timeout, $http) {
  var service = this;

  service.getAllCategories   = function () {
    return $http.get('https://davids-restaurant.herokuapp.com/categories.json')
  };

  service.getItemsForCategory   = function (categoryShortName) {
    return $http.get('https://davids-restaurant.herokuapp.com/menu_items.json?category='+categoryShortName)
  };

}

})();
