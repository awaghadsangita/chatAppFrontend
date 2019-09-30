chatAppModule.controller('getAllUserCtrl',function($scope,getAllUserService,SocketService){
    $scope.result=true; 
    console.log("front end getAll user controller");
    /** set login username and id from localStorage which will set at time of login */
    $scope.loginUser = localStorage.getItem('senderName')
    $scope.senderId=localStorage.getItem('senderId')
    console.log("login username =>",$scope.loginUser);
    console.log("login userid =>",$scope.senderId);
    $scope.allusers=[];
    $scope.getAllMessage=[];
    
    $scope.allUsers=function(){
        let UserData = {
            'token': localStorage.getItem('token')
        }
        console.log("user token " + UserData.token);

        getAllUserService.getAllUsersService(UserData, $scope)
        
    }
    $scope.allUsers();

/** set receiver data and collect all messages */
$scope.setReceiver = function (x) {

    console.log("get all message called", x)
     //set receiver id and name in local storage
    localStorage.setItem("receiverId", x._id)
    localStorage.setItem("receiverName", x.firstName)

    // set receiver id and name on scope 
    $scope.receiverName = x.firstName;
    $scope.receiverId = x._id;
    
    // console.log("receiver name=>",$scope.receiverName);
    // console.log("receiver id=>",$scope.receiverId)
    
    //calling service method to get all message 
    getAllUserService.getAllMessageService($scope)
}

//collect sender and receiver information and message
$scope.sendMessage=function(){
    
    var sentObject={
        "senderID": localStorage.getItem('senderId'),
        "senderName": localStorage.getItem('senderName'),
        "receiverID": localStorage.getItem('receiverId'),
        "receiverName": localStorage.getItem('receiverName'),
        "message":$scope.message
    }
    // create event and that event listen by server controller
    SocketService.emit("messageContainer",sentObject)
    $scope.getAllMessage.push(sentObject);
}
var senderId=localStorage.getItem('senderId');

SocketService.on(senderId ,function(message) {
      
    if (localStorage.getItem('receiverId') == message.senderID) {
        if ($scope.getAllMessage === undefined) {
            $scope.getAllMessage = message;//assigning message to variable
        }
        else  {
            $scope.getAllMessage.push(message);
        }
    }
})
$scope.clearTextArea=function(){
    console.log('in clear test area');
    $scope.message='';
}
$scope.logout=function(){
    getAllUserService.logoutService($scope);
}
});