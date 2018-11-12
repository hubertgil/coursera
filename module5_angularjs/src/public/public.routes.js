(function() {
'use strict';

angular.module('public')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('public', {
      abstract: true,
      templateUrl: 'src/public/public.html'
    })
    .state('public.home', {
      url: '/',
      templateUrl: 'src/public/home/home.html'
    })
    .state('public.registration', {
      url: '/registration',
      templateUrl: 'src/public/registration/registration.html',
      controller: 'RegistrationController',
      controllerAs: 'registrationCtrl'
    })
    .state('public.user-preferences', {
      url: '/user-preferences',
      templateUrl: 'src/public/user-preferences/user-preferences.html',
      controller: 'UserPreferencesController',
      controllerAs: 'userPreferencesCtrl',
      resolve: {
        userPreferences: ['RegistrationService', 'MenuService', function (RegistrationService,MenuService) {
          var pref = RegistrationService.getUserPreferences();

          if(pref) {
              return MenuService.getFavouriteDish(pref.favouriteDish).then(function(response) {
                pref.dish = response;
                return pref;
              } );
          } else {
            return pref;
          }
        }]
      }

    })
    .state('public.menu', {
      url: '/menu',
      templateUrl: 'src/public/menu/menu.html',
      controller: 'MenuController',
      controllerAs: 'menuCtrl',
      resolve: {
        menuCategories: ['MenuService', function (MenuService) {
          return MenuService.getCategories();
        }]
      }
    })
    .state('public.menuitems', {
      url: '/menu/{category}',
      templateUrl: 'src/public/menu-items/menu-items.html',
      controller: 'MenuItemsController',
      controllerAs: 'menuItemsCtrl',
      resolve: {
        menuItems: ['$stateParams','MenuService', function ($stateParams, MenuService) {
          return MenuService.getMenuItems($stateParams.category);
        }]
      }
    });
}
})();
