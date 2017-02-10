# Angular-LocalStorage
An Angular module that gives you access to the browsers local storage


First Include Angular and Angular Local Storage File

Them include dependency when intialising app LocalStorageModule

Set all the local storage configuration of app in the config block

 use "localStorageServiceProvider"

 app.config('localStorageServiceProvider',function(){
    localStorageServiceProvider.setPrefix('ls-app');
 });


 You can also dynamically change storage type by passing the storage type as the
 last parameter for any of the API calls.
 For example: localStorageService.set(key, val, "sessionStorage");


