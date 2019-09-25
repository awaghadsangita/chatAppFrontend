chatAppModule.controller('loginCtrl',function($scope,loginService){
    console.log('Login called...');
    $scope.login=function()
    {
        let loginData={
            'email':$scope.email,
            'password':$scope.password
        }
        console.log('Login Data',loginData);
        loginService.loginServiceUser(loginData,$scope);
        localStorage.setItem('senderEmail',$scope.email)
        
    }

    $scope.reset = function() {
        $scope.loginForm.$setPristine();
        // $scope.loginForm.$setUntouched();
    };

    $scope.clearfunction = function() {
        $scope.email = '';
        $scope.password='';
    }

    
})