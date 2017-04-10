app.controller("ctrl",ctrl);
ctrl.$inject=['$scope','$location'];
function ctrl($scope,$location) {
    $scope.login=function (uemail,y) {
       if(uemail=="abc" && y=="abc"){
            $location.path("../flowers.html");
        }

    }
}