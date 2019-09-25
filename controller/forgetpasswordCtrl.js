
chatAppModule.controller('forgetPasswordCtrl',function($scope,forgetpasswordService){
    console.log('forgetpassword is called...',$scope.email);
    $scope.forgetPassword=function(){
        let forgetPassword={
            email:$scope.email
        }

        // localStorage.setItem('name','jhg')

        // $scope.name=localStorage.getItem('name')

        console.log('forgotpassword Data :',forgetPassword);
        forgetpasswordService.forgetPasswordServiceUser(forgetPassword,$scope);
    }
 
});