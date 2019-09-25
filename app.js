let chatAppModule = angular.module('chatAppModule',['ui.router','btford.socket-io']);



chatAppModule.config(['$stateProvider','$urlRouterProvider',($stateProvider,$urlRouterProvider)=>{
    $stateProvider
    .state('registration',{
        url:'/registration',
        templateUrl:'template/registration.html',
        controller:'registrationCtrl'
    })
    
    .state('login',{
        url:'/login',
        templateUrl:'template/login.html',
        controller:'loginCtrl'
    })
    .state('forgetPassword',{
        url:'/forgetPassword',
        templateUrl:'template/forgetPassword.html',
        controller:'forgetPasswordCtrl'
    })
    .state('resetPassword',{
        url:'/resetPassword/:token',
        templateUrl:'template/resetPassword.html',
        controller:'resetpasswordCtrl'
    })
    .state('getAllUser', {
        url: '/getAllUser/:token',
        templateUrl: 'template/message.html',
        controller:'getAllUserCtrl'

    })

    $urlRouterProvider.otherwise('login')
}])

chatAppModule.service('SocketService', ['socketFactory', function SocketService(socketFactory) {
    
    return socketFactory({
    ioSocket: io.connect('http://localhost:3000')
});
}]);