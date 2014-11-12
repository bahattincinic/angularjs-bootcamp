angular.module('angularShop').controller('langController', function ($scope, $translate, $rootScope, productService, tmhDynamicLocale) {
  $scope.switchLanguage = function (languageKey) {
    // not changed
    if($translate.use() == languageKey){
        return false;
    }
    // changed
    productService.all(languageKey, function(query){
        $rootScope.products = query;
        $translate.use(languageKey);
        tmhDynamicLocale.set(languageKey);
    });
  };
});


angular.module('angularShop').controller('mainController', function($scope, $rootScope, $translate, productService){
    $scope.init = function(){
        productService.all($translate.use() || 'en-us', function(query){
            $rootScope.products = query;
        });
    };
    $scope.init();
});

angular.module('angularShop').controller('contactController', function($scope, $translate){
    $scope.contact = {"fullname": "", "email": "", "message": ""};

    $scope.contactSend = function(){
        $scope.contact.fullname = '';
        $scope.contact.email = '';
        $scope.contact.message = '';
        $translate('message_send_message').then(function(message){
            alert(message);
        });
    }
});