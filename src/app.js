(function(){
  'use strict';
  var app = angular.module('localStorageApp',['LocalStorageModule'])
    .config(localStorageConfiguration)
    .controller('LocalStorageController',localStorageController);

     function localStorageConfiguration(localStorageServiceProvider){

       /*
        *Method name:setPrefix
        * arguments:app-name prefix variable
        * Default prefix: ls.<your-key>
        *To avoid overwriting any local storage variables from the rest of your app
        * use prefix before the variable to be saved
        */

       localStorageServiceProvider.setPrefix('ls-app');

       /*
        *Method name:setStorageType
        *arguments:storageType
        * Default storage: localStorage
        *You could change web storage type to localStorage or sessionStorage
        */
        localStorageServiceProvider.setStorageType('localStorage');

       // localStorageServiceProvider.setStorageType('sessionStorage');
     }


    function localStorageController($scope,localStorageService){

    //Checks if the browser support the current storage type(e.g: localStorage, sessionStorage). Returns: Boolean
     var  isStorageSupported = localStorageService.isSupported;
     var storageType;

      if(isStorageSupported){

        //Get storage type:localStorage or sessionStorage
        storageType = localStorageService.getStorageType();
      }



    $scope.fname="Snehal";
    $scope.lname="Mohite";
    $scope.age = 24;

    $scope.submit = function(){
      console.log('here');

      /*set

       Directly adds a value to local storage.
       If local storage is not supported, use cookies instead.
       Returns: Boolean

       */
      localStorageService.set('fname',$scope.fname);
      localStorageService.set('lname',$scope.lname);
      localStorageService.set('age',$scope.age);
    };

    $scope.getFname = function(){

      /*
       get

       Directly get a value from local storage.
       If local storage is not supported, use cookies instead.
       Returns: value from local storage
       */
      console.log("fname"+localStorageService.get('fname'));
    };

    $scope.getLname = function(){
      console.log("lname"+localStorageService.get('lname'));
    };

    $scope.getKeys = function(){

      /*
       keys

       Return array of keys for local storage, ignore keys that not owned.
       Returns: value from local storage


       */
      console.log("keys"+localStorageService.keys());
    };

    $scope.getStorageType = function(){
      console.log("type"+localStorageService.getStorageType());
    };

    $scope.removeFname = function(){

      /*
       remove

       Remove an item(s) from local storage by key.
       If local storage is not supported, use cookies instead.
       Returns: Boolean
       localStorageService.remove(key1, key2, key3);
       */
      console.log("Removed"+localStorageService.remove('fname'));
      console.log("fname"+localStorageService.get('fname'));
    };

    $scope.removeAll= function(){


      console.log("Removed"+localStorageService.remove('fname','lname'));
    }

    $scope.clearStorage= function(){
      /*
       clearAll

       Remove all data for this app from local storage.
       If local storage is not supported, use cookies instead.
       Note: Optionally takes a regular expression string and removes matching.
       Returns: Boolean
       */
      console.log("Removed"+localStorageService.clearAll());
    }



  }

})();
