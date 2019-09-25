chatAppModule.service('loginService', function ($http, $location) {
    this.loginServiceUser = function (data, $scope) {
        console.log("login service ", data)
        $http({
            method: 'POST',
            url: 'http://localhost:3000/login',
            data: data
        }).then(
            function (response) {
                console.log(response)
                if (response.data.success == false) {
                    console.log('login failed');
                    console.log(response);
                    alert('login failed');
                    
                } else {
                    
                    localStorage.setItem("senderId",response.data.content._id)
                    localStorage.setItem("senderName",response.data.content.firstName)
                    localStorage.setItem("token",response.data.content.token)
                   
                    alert('login successfully');
                    $location.path('/getAllUser/'+localStorage.getItem('token'));
                }
                
            }).catch(function (error) {
                
                alert('login failed');
                console.log('Login failed in catch ...', error);
            });
    }
});