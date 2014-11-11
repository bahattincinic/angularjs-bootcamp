var app = angular.module('myApp', ['ngCookies', 'pascalprecht.translate', 'firebase']);

app.config(['$translateProvider', function ($translateProvider) {

    $translateProvider.preferredLanguage('tr');
    // loader
    $translateProvider.useLoader('firebaseLoader');
    // remember language
    $translateProvider.useCookieStorage();
}]);

app.factory('firebaseLoader', function ($http, $q, $firebase) {
    return function (options) {
        var ref = new Firebase("https://angularjs-bootcamp.firebaseio.com/").child(options.key);
        var deferred = $q.defer();
        ref.on('value', function(snapshot){
            deferred.resolve(snapshot.val());
        });
        return deferred.promise;
    };
});

app.controller('langController', function ($scope, $translate, $firebase) {
   $scope.switchLanguage = function (languageKey) {
     $translate.use(languageKey);
   };
});