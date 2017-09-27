angular.module('myModule')
.controller("myController", function ($scope,Noteservice) {


		$scope.newNote = {};
		$scope.updateNote = {};
		$scope.updatedid;
		$scope.notess = [];

		// $scope.saveNote = function(){
		// 							$scope.notess.push($scope.newNote);
		// 							$scope.newNote = {};
		// 						};
		
        //$scope.dummy={};

		/*$scope.test=function()
		{
						var updateItem={
						"id":1,
						"name":"karthikeyan",
						"email":"karthik.infotec98@gmail.com",
						"gender":"male"};
			            Regservice.updatedata(updateItem,1);
						console.log("hi");
		};*/

		getData();

        function getData() {
            return Noteservice.getdetail()
                .then(function (data) {
                    $scope.notess = data;
					console.log("getidddddddsss"+$scope.notess);
                    return $scope.notess;
                });
        }
        console.log(JSON.stringify($scope.newNote));
		$scope.saveNote = function () {
        $scope.notess.push($scope.newNote);
        Noteservice.postNote($scope.newNote);
        
			console.log($scope.notess);
            $scope.newNote={};
            
		};


		/*$scope.editname;
		$scope.editemail;
		$scope.editgender;*/

		$scope.editNote = function (index) {
			console.log(index);
			$scope.updatedid = index;
			//console.log("updatedid" + $scope.updatedid);
			//console.log($scope.members[index]);
			//console.log($scope.members[index].name);
			//console.log($scope.name1);
		
			$scope.newNote.date = $scope.notess[index].date;
			$scope.newNote.notes = $scope.notess[index].notes;
			//console.log($scope.members);

		}
		$scope.saveUpdate = function () {
			console.log("saveid" + $scope.updatedid);
			//console.log(members);
			for (i = 0; i <= $scope.notess.length; i++) {

				if ($scope.updatedid === i) {
					// console.log($scope.members[i].name);
					// console.log($scope.members[i].email);
					// console.log($scope.members[i].gender);

					$scope.notess[i].date=$scope.newNote.date;
					$scope.notess[i].notes=$scope.newNote.notes;
					var update={
						"id":$scope.updatedid+1,
						"date":$scope.newNote.date,
						"notes":$scope.newNote.notes};
			            Noteservice.updatedata(update,$scope.updatedid+1);
						
					
                    // Regservice.updatedata($scope.members[i],$scope.updatedid+1);
				}
			}
			// console.log($scope.notess.date1);

		}
		 $scope.deleteNote=function(id)
		 {
			 console.log(id);
			 Noteservice.deletedata(id);
             console.log(id + " deleted");
		 };

	});

		// $scope.deleteMember = function (index) {
		// 	$scope.deleteid=index;
		// 	//console.log("deleteiddddddd"+$scope.deleteid);
		// 	//console.log($scope.members);
              
		// 	/*console.log(JSON.stringify($scope.members.slice(0, $scope.members.length)));
		// 	console.log(index);
		// 	$scope.dele={};
		// 	$scope.dele=index;
		// 	console.log("ldf"+JSON.stringify($scope.dele));*/
		// 	$scope.del = $scope.members.splice(index, 1);
		// 	/*console.log("hjsdghsdfgh"+JSON.stringify($scope.del));
		// 	console.log($scope.members);*/
		// 	Regservice.deletedata(1);
		// }


        