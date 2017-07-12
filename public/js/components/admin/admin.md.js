/*
Create Angular module app.blog and define all states
blog : parent state, is an abstrat state too with templateUrl
blog.list : nested state of state app.blog, display blog-list component
blog.item : nested state of state app.blog, display blog-item component with editable attribute value is true
*/

let adminModule = angular.module('app.admin', [])
    .config(['$stateProvider', ($stateProvider, $urlRouterProvider, $locationProvider) => {
        $stateProvider
            .state('admin', {
                url: '/admin',
                templateUrl: 'js/components/admin/admin.html'
            }).state('adminadd', {
                url: '/admin/add',
                templateUrl: 'js/components/admin/adminadd.html'
            })
    }])
    .name

export default adminModule
