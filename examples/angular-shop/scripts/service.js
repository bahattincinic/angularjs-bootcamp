angular.module('angularShop').factory('productService', function($resource){
    
    return {
        all: function(languageKey, callback){
            var Product = $resource('/initial/:langId/products.json', {langId: languageKey});
            var products = Product.query(function(){
               callback(products); 
            });
        }
    }
});