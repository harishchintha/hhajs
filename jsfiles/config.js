app.config(config);
config.$inject=['$stateProvider','$urlRouterProvider'];
function config($stateProvider,$urlRouterProvider) {
    $stateProvider.state('page1',{
        url:'/page1',
        templateUrl:'templates/page1.html',
        controller:'page1'
    })
    .state('page1.child1',{
        url:'/child1',
        templateUrl:'templates/c1.html',
        controller:'c1'
    })
        .state('page1.child2', {
            url: '/child2',
            templateUrl: 'templates/c2.html',
            controller: 'c2'
        })
        .state('page2',{
            url:'/page2',
            templateUrl:'templates/page2.html',
            controller:'page2'
        })
        .state('page2.child1',{
            url:'/child1',
            templateUrl:'templates/c1.html',
            controller:'c1'
        })
        .state('page2.child2', {
            url: '/child2',
            templateUrl: 'templates/c2.html',
            controller: 'c2'
        })
        $urlRouterProvider.otherwise('page1',{
            url:'/page1',
            templateUrl:'templates/page1.html',
            controller:'page1'
        })

};