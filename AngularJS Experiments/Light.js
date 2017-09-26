var List = [];
var app = angular.module("App", []);
var key = 0;

app.controller("Ctrl", function ($scope) {
  $scope.users = List;
  $scope.Add = true;
  $scope.Update = false;
  $scope.add = function () {
    var val = $scope.name;
    $scope.name = "";
    List.push(val);
  };
  $scope.edit = function (x) {
    $scope.name = List[x];
    key = x;
    $scope.Add = false;
    $scope.Update = true;
  };
  $scope.delete = function (x) {
    List.splice(x, 1);
  };
  $scope.update = function () {
    List[key] = $scope.name;
    $scope.name = "";
    $scope.Add = true;
    $scope.Update = false;
  };
});


// var List = [];
// var app = angular.module("App", []);
// var key = 0;

// app.controller("Ctrl", function($scope) {
//   $scope.users = List;
//   $scope.Add = true;
//   $scope.Update = false;
//   $scope.add = function() {
//     $scope.users.push($scope.Note);
//     $scope.Note = {};

//   };
//   $scope.edit = function(x) {
//     $scope.Note = List[x];
//     key = x;
//     $scope.Add = false;
//     $scope.Update = true;
//   };
//   $scope.delete = function(x) {
//     List.splice(x, 1);
//   };
//   $scope.update = function() {
//     List[key] = $scope.Note;
//     $scope.Note = {};
//     $scope.Add = true;
//     $scope.Update = false;
//   };
// });