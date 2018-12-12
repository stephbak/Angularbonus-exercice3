var routeApp = angular.module('routeApp', ['ngRoute']);
routeApp.run(function($rootScope){
  $rootScope.subjectList=[];
  $rootScope.nameList=[];
  $rootScope.mailList=[];
  $rootScope.textList=[];
});
routeApp.config(['$routeProvider',function($routeProvider) {
  $routeProvider
  .when('/form', {
    templateUrl: 'partials/formulaire.html',
    controller: 'formcontrol'
  })
   .when('/resultat/:id?', {
      templateUrl: 'partials/resultat.html',
      controller: 'resultatcontrol'
})
.otherwise({
redirectTo:'/form'
});
}]);
routeApp.controller('formcontrol', function($scope, $rootScope){
  $scope.send = function(){
    $rootScope.subjectList.push($scope.sujet);
    $rootScope.nameList.push($scope.name);
    $rootScope.mailList.push($scope.email);
    $rootScope.textList.push($scope.texte);
  };
});
routeApp.controller('resultatcontrol', function ($scope, $rootScope, $routeParams){
  $scope.id = $routeParams.id;
  $scope.name = $rootScope.nameList[$scope.id];
  $scope.email = $rootScope.mailList[$scope.id];
  $scope.sujet = $rootScope.subjectList[$scope.id];
  $scope.texte = $rootScope.textList[$scope.id];
});
