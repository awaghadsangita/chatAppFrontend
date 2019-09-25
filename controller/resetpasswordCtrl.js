chatAppModule.controller('resetpasswordCtrl',function($scope,$stateParams,resetpasswordService){
    console.log('resetpassword called...');
    // console.log("Token get ",$stateParams.token)
    $scope.resetPassword=function(){
        let resetpasswordData={
            'password':$scope.newPassword,
            'token':$stateParams.token
        }
        console.log('resetpassword Data '+resetpasswordData);
        resetpasswordService.resetpasswordServiceUser(resetpasswordData,$scope);
    }
    $scope.compare = function() {
        console.log('in compare function')
        // if ($scope.newPassword != $scope.confirmPassword)
        if (!angular.equals($scope.newPassword, $scope.confirmPassword)) 
        {
            console.log('not equal');
          $scope.IsMatch=true;
          return false;
        }
        $scope.IsMatch=false;
      }
   
});

