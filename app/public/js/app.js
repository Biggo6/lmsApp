'use strict';

var app = angular.module('lmsApp', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider.when('/', {
      templateUrl : 'partials/login.html'
  });
});
