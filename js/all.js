var app = angular.module("newTask", ['ui.router']);
app.config(function($stateProvider) {
    var homeState = {
        name: "home",
        url: "/home",
        templateUrl: "./home.html",
        controller: "homeCtrl",
    }
    var aboutState = {
        name: "about",
        url: "/about",
        templateUrl: "./about.html",
        controller: "aboutCtrl",
    }
    var otherState = {
        name: "other",
        url: "/other",
        templateUrl: "./other.html",
        controller: "otherCtrl",
    }
    $stateProvider.state(homeState);
    $stateProvider.state(aboutState);
    $stateProvider.state(otherState);
});