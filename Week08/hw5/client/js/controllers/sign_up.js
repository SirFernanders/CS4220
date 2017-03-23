/**
 * Created by Fernando on 3/21/17.
 */
angular
    .module('SignUpCtrl', [])
    .controller('SignUpControl', function($scope, $location) {

        let groups = [];
        let modules = [];



        $scope.signup = ()=>{
            const firstName = $scope.firstName;
            const lastName = $scope.lastName;
            const email = $scope.email;
            const module = $scope.userModuleName;

            groups.forEach((group,index)=>{
                if(group.thisModuleName==module){
                    groups[index].team.push({firstname: firstName, lastname:lastName, email:email, hasMembers:true})
                }
            })





        };

        $scope.addmodule = () =>{
            const moduleName = $scope.moduleName;
            const website = $scope.moduleWebsite;

            groups.push({thisModuleName: moduleName, ModuleUrl: website, team:[]})
            addDropdownModules(moduleName);

            $scope.groups = groups;

        };

        $scope.deletemember = (groupName, first, last) =>{

            let tempTeam = [];
            let tempGroup = {};
            groups.forEach((group,index)=>{
                if(group.thisModuleName == groupName) {
                    group.team.forEach((member,index)=>{
                        if(!member.firstname == first && member.lastname == last){
                            tempTeam = member
                        }
                    })
                    tempGroup = group;
                    tempGroup.team = tempTeam;
                    deletegroup(group.thisModuleName);
                    groups.push(tempGroup);
                }
            })

            $scope.groups = groups;

        };

        const deletegroup = (name) =>{
            console.log(name);
            tempArry = [];
            groups.forEach((x,index)=>{
                if(!x.thisModuleName == name){
                    tempArry.push(x);
                }

            });
            groups = tempArry;
            $scope.groups = groups;
        };

        $scope.deletegroup = deletegroup;

        const addDropdownModules = (module) =>{
            if(modules.includes(module)){

            }
            else if(modules.includes(module+" - Group 1")){

            }
            else{
                modules.push(module)
            }
            $scope.modules = modules;
        };

/*
        groups.push({thisModuleName:"colors",ModuleUrl:'http://www.npmjs.com/package/colors', team:[{firstname:"fernando"},{firstname:"fer"}]});
        groups.push({thisModuleName:"chalk", team:[{firstname:"liz"},{firstname:"lizzy"}]});
        addDropdownModules("chalk");
        addDropdownModules("colors");


*/



    });