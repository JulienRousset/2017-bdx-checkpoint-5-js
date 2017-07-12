import accountComponent from './account'
import loginComponent from './login'
import connectComponent from './connect'
import algoComponent from './algo'

let loginModule = angular.module('app.login', [])
    .component('account', accountComponent)
    .component('login', loginComponent)
    .component('connect', connectComponent)
    .component('algo', algoComponent)
    .config(['$stateProvider', ($stateProvider) => {
        'use strict'
        $stateProvider
            .state('app.login', {
                url: '',
                abstract: true,
                template: '<login></login>'
            })
            .state('app.login.connect', {
                url: '/login',
                template: '<connect></connect>'
            })
            .state('app.login.create', {
                url: '/alg1',
                template: '<account></account>'
            })
            .state('app.login.algo', {
                url: '/algo',
                template: '<algo></algo>'
            })
    }])
    .name

export default loginModule
