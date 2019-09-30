chatAppModule.service('forgetpasswordService',function($http,$location){

    this.forgetPasswordServiceUser=function(data,$scope){
        $http({
            method:'POST',
            url:'http://13.234.76.176:3000/forgetPassword',
            data:data
        }).then(
            function(response){
                if(response.data.content==false){
                    console.log('this is not register email address');
                    console.log(response);
                    
                    alert('this is not registered email address...');
                }else{
                    console.log('email send successfully');
                    console.log(response);
                    localStorage.setItem('token',response.data.token);
                    alert('email send for reset password successfully...');
                }
                $location.path('./#/message');
            }
        ).catch(function(error){
            alert('email sending failed as email not registered');
            console.log('email sending failed...',error);
        });
    }
});