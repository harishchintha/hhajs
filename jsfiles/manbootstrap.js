var my = document.getElementById("t");
angular.element(my).ready(function (response) {
    angular.bootstrap(my,['app']);
});