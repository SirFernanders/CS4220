angular
    .module('FactCtrl', [])
    .controller('FactController', function($scope, FactService) {

        $scope.getMathFact = () => {
            FactService.get({
                type: 'math',
                number: $scope.number,
            }, (response) => {
                if(response["type"]==null){
                    $scope.type= "";
                    $scope.num = "";
                    $scope.text = "";
                }
                else {
                    $scope.type = response["type"].toUpperCase();
                    $scope.num = "(" + response["number"] + ")";
                    $scope.text = " - " + response["text"];
                }
            })
        }
        $scope.getTrivia = () => {
            FactService.get({
                type: 'trivia',
                number: $scope.number,
            }, (response) => {
                if(response["type"]==null){
                    $scope.type= "";
                    $scope.num = "";
                    $scope.text = "";
                }
                else {
                    $scope.type = response["type"].toUpperCase();
                    $scope.num = "(" + response["number"] + ")";
                    $scope.text = " - " + response["text"];
                }
            })
        }
        $scope.getDate = () => {
            FactService.get({
                type: 'date',
                number: $scope.number,
            }, (response) => {
                if(response["type"]==null){
                    $scope.type= "";
                    $scope.num = "";
                    $scope.text = "";
                }
                else {
                    const date = getDate(response["number"]);
                    $scope.type = response["type"].toUpperCase();
                    $scope.num = "(" + date + "/" + response["year"] + ")";
                    $scope.text = " - " + response["text"];
                }
            })
        }
        $scope.getRandom = () => {
            const type = randomType();
            const num = randomNum(type);
            FactService.get({

                type: type,
                number: num
            }, (response) => {
                $scope.type = response["type"].toUpperCase();
                if(response["type"]=="date"){
                    const date = getDate(response["number"]);
                    $scope.num = "("+date+"/"+response["year"]+")";
                    $scope.text = " - "+response["text"];
                }
                else{
                    $scope.num = "("+response["number"]+")";
                    $scope.text = " - "+response["text"];
                }
            })
        }
    });

const randomType = ()=>{
    const types = {1:'math',2:'trivia',3:'date'};
    return types[Math.floor((Math.random()*3)+1)];

};
const randomNum = (type)=>{
    if(type=='date'){
        return Math.floor((Math.random()*366)+1)
    }

    return Math.floor((Math.random()*100)+1);

};

const getDate = (num)=>{
    //months are (index + 1)
    const months = [31,29,31,30,31,30,31,31,30,31,30,31];
    let date="";
    let done = false;

     months.forEach((days,index)=>{
            if(num>days){
                num = num-days
            }
            else if(done){

            }
            else{
                date = ((index+1)+"/"+num);
                done = true;
            }
    });

    return date;
};
