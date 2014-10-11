angular.module('myApp').controller('MainCtrl', ['$scope', function ($scope) {
    
    $scope.todos = [
        { text:'Walk Dog', done: false },
        { text: 'Do Laundry', done: false },
        { text: 'Shower', done: false }
        ];
    
    $scope.addItem = function (newItem) {
        $scope.todos.push( { text: newItem, done: false });
    };
    

}])