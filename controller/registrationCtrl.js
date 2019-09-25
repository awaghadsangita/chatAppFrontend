chatAppModule.controller('registrationCtrl',function($scope,registerService){
    console.log('registration called');
    let passwordRegx=/^[a-zA-Z0-9]{8,}$/;
    $scope.passwordValidation=function(password){
        if (passwordRegx.test(password)) {
            $scope.passwordResult = false;
            $scope.mainValid = true;
        } else {
            $scope.passwordResult = true;
            $scope.mainValid = false;
        }
    }
    // $scope.lastnameValidation=function(lastName){
    //     if (nameRegx.test(lastName)) {
    //         $scope.lastnameResult = false;
    //         $scope.mainValid = true;
    //     } else {
    //         $scope.lastnameResult = true;
    //         $scope.mainValid = false;
    //     }
    // }
    // lastnameValidation
    // let emailRegex = /^([A-Za-z0-9_\-.])+@([gmail])+\.([A-Za-z]{2,4})$/;

    // $scope.emailValidation = function (email) {
    //     if (emailRegex.test(email)) {
    //         $scope.emailResult = false;
    //         $scope.mainValid = true;
    //     } else {
    //         $scope.emailResult = true;
    //         $scope.mainValid = false;
    //     }
    // }
    $scope.register=function(){
        let registrationData={
            'firstName':$scope.firstName,
            'lastName':$scope.lastName,
            'email':$scope.email,
            'password':$scope.password
        }
        console.log('Register Data :',registrationData);
        registerService.registerServicesUser(registrationData,$scope);
    }

    $scope.reset = function() {
        $scope.regForm.$setPristine();
        // $scope.loginForm.$setUntouched();
    };

    $scope.clearfunction = function() {
        $scope.firstName='';
        $scope.lastName='';
        $scope.email='';
        $scope.password='';
    }

})