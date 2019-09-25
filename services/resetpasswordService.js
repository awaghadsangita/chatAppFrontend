chatAppModule.service('resetpasswordService', function ($http, $location) {
    this.resetpasswordServiceUser = function (data, $scope) {
        console.log("in service data ", data);
    
        $http({
            method: 'POST',
            url: 'http://localhost:3000/resetPassword',
            data: data,
        }).then(
            function (response) {
                if (response.data.content == false) {
                    console.log('reset password failed because backend response')
                    console.log(response);
                    
                    alert('reset password failed...');
                } else {
                    console.log('reset password successfully...');
                    console.log(response);
                    
                    alert('reset password successfully...');
                    $location.path('/#/login');
                }

            }).catch(function (err) {
                alert('reset password failed...');
                console.log('reset password failed..in catch', err)
            })
    }
})