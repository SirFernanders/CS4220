/**
 * Created by Fernando on 3/21/17.
 */
angular
    .module('SignUpCtrl', [])
    .controller('SignUpControl', function($scope, $location) {

        let groups = [];



        $scope.signup = ()=>{
            const firstName = $scope.firstName;
            const lastName = $scope.lastName;
            const email = $scope.email;
            const module = $scope.userModuleName;

            groups.forEach((group,index)=>{
                if(group.thisModuleName==module){
                    groups[index].team.push({firstname: firstName, lastname:lastName, email:email, hasMembers:true})
                }
            });

            $scope.groups = groups;



        };

        $scope.addmodule = () =>{
            const moduleName = $scope.moduleName;
            let website = $scope.moduleWebsite;

            if(!website.includes("http")){
               website = "http://"+website;
            }

            if (groups.length<1) {
                groups.push({thisModuleName: moduleName, ModuleUrl: website, team: [],name:moduleName,count:1});

            }
            else{
                addAlphabetically(moduleName,website);

            }



            $scope.groups = groups;

        };

        $scope.deletemember = (groupName, first, last) =>{

            let tempTeam = [];

            groups.forEach((group,groupIndex)=>{
                if(group.thisModuleName == groupName) {
                    group.team.forEach((member,index)=>{
                        if(member.firstname != first && !member.lastname != last){
                            tempTeam.push(member);
                        }
                    })
                    groups[groupIndex].team = tempTeam;
                }
            })


            $scope.groups = groups;

        };


        $scope.deletegroup = (name) =>{
            console.log(name);
            tempArry = [];
            groups.forEach((x,index)=>{
                if(x.thisModuleName != name){
                    tempArry.push(x);
                }

            });



            groups = tempArry;

            $scope.groups = groups;


        };




        const addAlphabetically = (name, website)=>{
            const alphabet= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"," ","-","1","2","3","4","5"]
            let tempGroup =[];
            let secondName = name;




            groups.forEach((group,index)=> {

                if (group.name.toLowerCase() === name.toLowerCase()) {

                    if(group.count==1) {
                        group.thisModuleName = (group.thisModuleName + " - Group 1");
                    }

                    group.count = group.count+1;
                    name = (name + " - Group " + (group.count));
                    secondName = "*DUPLICATE*";



                }

                    const nameLetters = name.toLowerCase().split("");
                    const groupLetters = group.thisModuleName.toLowerCase().split("");

                    let newNameCount = 0;
                    let groupNameCount = 0;

                    for (let i = 0; i < groupLetters.length; i++) {
                        if (i > nameLetters.length) {
                            break;
                        }
                        groupNameCount += (alphabet.indexOf(groupLetters[i]) + 1);
                        newNameCount += (alphabet.indexOf(nameLetters[i]) + 1);

                        if (groupNameCount != newNameCount) {
                            break;
                        }
                    }

                    if (newNameCount < groupNameCount) {
                        tempGroup.push({thisModuleName: name, ModuleUrl: website, team: [],name:secondName,count:1});
                        tempGroup.push(group);
                    }
                    else if ((groups.length - 1) === index) {
                        tempGroup.push(group);
                        tempGroup.push({thisModuleName: name, ModuleUrl: website, team: [],name:secondName,count:1});
                    }
                    else {
                        tempGroup.push(group);
                    }


            });

            groups = tempGroup;



        };

/*
        groups.push({thisModuleName:"colors",ModuleUrl:'http://www.npmjs.com/package/colors', team:[{firstname:"fernando"},{firstname:"fer"}]});
        groups.push({thisModuleName:"chalk", team:[{firstname:"liz"},{firstname:"lizzy"}]});
        addDropdownModules("chalk");
        addDropdownModules("colors");


*/



    });