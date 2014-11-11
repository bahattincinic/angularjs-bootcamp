var app = angular.module('angularShop', ['ngCookies', 'pascalprecht.translate', 'ngResource', 'ngRoute', 'tmh.dynamicLocale']);

app.config(['$translateProvider', 'tmhDynamicLocaleProvider', function ($translateProvider, tmhDynamicLocaleProvider) {
    // /i18n/locale-en.json or /i18n/locale-tr.json
    $translateProvider.useStaticFilesLoader({
        prefix: '/i18n/locale-',
        suffix: '.json'
    });

    $translateProvider.preferredLanguage('en-us');
    $translateProvider.useCookieStorage();

    tmhDynamicLocaleProvider.localeLocationPattern('/components/angular-i18n/angular-locale_{{locale}}.js');
    tmhDynamicLocaleProvider.storeKey = $translateProvider.storagePrefix();
    tmhDynamicLocaleProvider.useCookieStorage();
}]);


app.config(function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: '/views/home.html',
    controller: 'mainController'
  }).when('/404', {
    templateUrl: '/views/404.html',
  }).when('/contact', {
    templateUrl: '/views/contact.html',
    controller: 'contactController'
  }).otherwise({
    redirectTo: '/404'
  });
});