chatAppModule.service('registerService', function ($http, $location) {
    this.registerServicesUser = function (data, $scope) {
        $http({
            method: 'POST',
            url: 'http://localhost:3000/registration',
            data: data
        }).then(
            function (response) {
                if (response.data.success==false) {
                    console.log('Registration Failed ');
                    console.log(response);
                    alert('email already exist');
                    
                } else {
                    console.log('Registration done Successfully');
                    console.log('response data :' + JSON.stringify(response));
                    alert('registartion done successfully');
                    $location.path('/#/login');
                }

            }).catch(function (error) {
                alert('registration failed');
                console.log('registration failed becoz of validations errors :', error)
                

            });
    }
});