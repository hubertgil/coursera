(function () {
'use strict';

angular.module('FoundItemsDirectiveApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective);


function FoundItemsDirective() {
  var ddo = {
    restrict: 'E',
    templateUrl: 'foundItems.html',
    scope: {
      foundItems: '<',
      onRemove: '&'
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'list',
    bindToController: true
  };

  return ddo;
}


function FoundItemsDirectiveController() {
  var list = this;


}


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var list = this;

  list.term = "";
  list.found = [];
  list.searched = false;

  list.getMatchedMenuItems = function(searchTerm) {
      if(!!searchTerm) {
          MenuSearchService.getMatchedMenuItems(searchTerm).then(function(result) {
            list.found = result
          });
      } else {
        list.found = [];
      }
      list.searched = true;
  }


  list.removeItem = function (itemIndex) {
    list.found.splice(itemIndex, 1);
  };
}

MenuSearchService.$inject = ['$http'];
function MenuSearchService($http) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {

    return $http.get('https://davids-restaurant.herokuapp.com/menu_items.json').then(function (result) {
        // process result and only keep items that match
        var foundItems = result.data.menu_items;
        if(!!searchTerm){
            foundItems = foundItems.filter(function(item) {
                return item.description.indexOf(searchTerm) >=0 ;
            })
        }
        // return processed items
        return foundItems;
    })


    return items;
  };
}



})();
