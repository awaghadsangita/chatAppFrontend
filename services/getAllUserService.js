chatAppModule.service('getAllUserService',function($http,$location){

    this.getAllUsersService=function(data,$scope){
        let token=localStorage.getItem('token');
        $http({
            method:'POST',
            url:'http://localhost:3000/getAllUser',
            data:data,
            header:token
        }).then(
            function(response){
                console.log(response.data.success+"==>success");
                if(response.data.success==true){
                    $scope.allusers=response.data.content;
                    $scope.currentUser=localStorage.getItem('senderName');
                }else{
                    $location.path('/login');
                }
            }
        ).catch(function(error){
            //  console.log('Error Occured in retriving user',error);
             $location.path('/login');
        });
    }

    // get all message information 
    this.getAllMessageService=function($scope){
        let particularUserMessages=[]
     
        $http({
            method: 'GET',
            url: 'http://localhost:3000/getAllMessage'
        }).then(function (response) {
            if (response) {
                // console.log("All message from DB", response.data.content);
                let senderId=localStorage.getItem("senderId");
                let receiverId=localStorage.getItem("receiverId")

                for(let i=0;i<response.data.content.length;i++){
                    let user = response.data.content[i];

                if(((senderId===user.senderID && receiverId===user.receiverID) ||
                     (senderId===user.receiverID && receiverId===user.senderID))){
                                               
                        particularUserMessages.push(user);

                     }
                     $scope.getAllMessage=particularUserMessages;
                     console.log("array of particular user messages",$scope.getAllMessage);
                }
            }
        }).catch(function (error) {
            console.log("Error occured in catch "+error);

        })
    }
    this.logoutService=function($scope){
        localStorage.removeItem('_id');
        localStorage.removeItem('firstName');
        localStorage.removeItem('token');

        $location.path('/login');
    }
});