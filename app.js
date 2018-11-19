
// (function(){

var app = angular.module('countriesapp',[]);

app.controller('CountryCountroller',function(){
    
    this.countries = [
       {
          name : 'India',
          code : 'in',
          states : [{name:'AP'},{name:'Telangana'}]
       },
       {
          name : 'USA',
          code : 'us',
          states : [{name:'New York'},{name:'New Jersey'}]
       },
       {
          name : 'Pakistan',
          code : 'pk'
          
       }];

});

// })();