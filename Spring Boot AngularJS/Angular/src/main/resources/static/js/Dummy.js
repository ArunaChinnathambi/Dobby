var List = [];
var app = angular.module("App", []);
var key = 0;

app.controller("Ctrl", function($scope) {
  $scope.users = List;
  $scope.Add = true;
  $scope.Update = false;
  $scope.add = function() {
    // var val = $scope.date;
    // var val1 = $scope.notes;
    // $scope.date = "";
    // $scope.notes = "";
    // List.push(val);
    // List.push(val1);
    $scope.users.push($scope.Note);
    $scope.Note = {};
    
  };
  $scope.edit = function(x) {
    // $scope.date = List[x];
    // $scope.notes = List[x];
    $scope.Note = List[x];
    key = x;
    $scope.Add = false;
    $scope.Update = true;
  };
  $scope.delete = function(x) {
    List.splice(x, 1);
  };
  $scope.update = function() {
    // List[key] = $scope.date;
    // List[key] = $scope.notes;
    // $scope.date = "";
    // $scope.notes = "";
    List[key] = $scope.Note;
    $scope.Note = {};
    $scope.Add = true;
    $scope.Update = false;
  };
});