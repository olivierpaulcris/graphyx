var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $timeout) {
  $scope.maxValue = 2132929.372;
  $scope.maxFont = 43;
  $scope.maxHeight = 38;
  var date = new Date('2003-01-01');
  $scope.date = date;

  datas = [
    {
      name:'Aguascalientes', 
      value: 121197.634, 
      color: "#df4a2e",
      class: "aguascalientes"
    },
    {
      name:'Baja California', 
      value: 399514.624, 
      color: "#44c5f0",
      class:'baja-california', 
    },
    {
      name:'Baja California Sur', 
      value: 76047.593, 
      color: "#0071bd",
      class:'baja-california-sur', 
    },
    {
      name:'Campeche', 
      value: 1047511.322, 
      color: "#0e6da5",
      class:'campeche', 
    },
    {
      name:'Coahuila', 
      value: 436573.518, 
      color: "#4c7e27",
      class:'coahuila', 
    },
    {
      name:'Colima', 
      value: 67732.93, 
      color: "#d2a898",
      class:'colima', 
    },
    {
      name:'Chiapas', 
      value: 248123.227, 
      color: "#774421",
      class:'chiapas', 
    },
    {
      name:'Chihuahua', 
      value: 360426.663, 
      color: "#7cc4ea",
      class:'chihuahua', 
    },
    {
      name:'CDMX', 
      value: 2132929.372, 
      color: "#11ad4b",
      class:'cdmx', 
    },
    {
      name:'Durango', 
      value: 152922.727, 
      color: "#be1532",
      class:'durango', 
    },
    {
      name:'Guanajuato', 
      value: 438354.387, 
      color: "#1c6799",
      class:'guanajuato', 
    },
    {
      name:'Guerrero', 
      value: 182713.981, 
      color: "#7bc1e5",
      class:'guerrero', 
    },
    {
      name:'Hidalgo', 
      value: 179553.378, 
      color: "#c9a95f",
      class:'hidalgo', 
    },
    {
      name:'Jalisco', 
      value: 794957.322, 
      color: "#0d668c",
      class:'jalisco', 
    },
    {
      name:'Edo. de México', 
      value: 1048403.59, 
      color: "#ce2c16",
      class:'edomx', 
    },
    {
      name:'Michoacán', 
      value: 294468.306, 
      color: "#04903f",
      class:'michoacan', 
    },
    {
      name:'Morelos', 
      value: 158055.834, 
      color: "#7c3e14",
      class:'morelos', 
    },
    {
      name:'Nayarit', 
      value: 76105.196, 
      color: "#069c41",
      class:'nayarit', 
    },
    {
      name:'Nuevo León', 
      value: 803888.528, 
      color: "#9da1a4",
      class:'nuevo-leon', 
    },
    {
      name:'Oaxaca', 
      value: 202963.936, 
      color: "#ae2e22",
      class:'oaxaca', 
    },
    {
      name:'Puebla', 
      value: 395907.258, 
      color: "#168dc6",
      class:'puebla', 
    },
    {
      name:'Querétaro', 
      value: 212106.713, 
      color: "#2c1e74",
      class:'queretaro', 
    },
    {
      name:'Quintana Roo', 
      value: 144233.02, 
      color: "#d8521b",
      class:'quintana-roo', 
    },
    {
      name:'San Luis Potosí', 
      value: 224280.267, 
      color: "#d1b42c",
      class:'san-luis-potosi', 
    },
    {
      name:'Sinaloa', 
      value: 268247.066, 
      color: "#bc1832",
      class: 'sinaloa',
    },
    {
      name:'Sonora', 
      value: 365533.727, 
      color: "#f9b804",
      class:'sonora', 
    },
    {
      name:'Tabasco', 
      value: 374891.404, 
      color: "#d6222d",
      class:'tabasco', 
    },
    {
      name:'Tamaulipas', 
      value: 391574.439, 
      color: "#13638d",
      class:'tamaulipas', 
    },
    {
      name:'Tlaxcala', 
      value: 83254.186, 
      color: "#e3e4e6",
      class:'tlaxcala', 
    },
    {
      name:'Veracruz', 
      value: 613590.201, 
      color: "#eeb403",
      class:'veracruz', 
    },
    {
      name:'Yucatán', 
      value: 161636.497, 
      color: "#008449",
      class:'yucatan', 
    },
    {
      name:'Zacatecas', 
      value: 101406.31, 
      color: "#e9c005",
      class:'zacatecas', 
    },
  ];

  $scope.states = datas;

  $scope.xample = datas[0].value;

  var timer;
  var i = 0;
  var inc = 0;

  function myLoop() {
    timer = $timeout(function () {
        console.log("Timeout executed", Date.now());
    }, 100);

    timer.then(function () {
        console.log("Timer resolved!");

        inc = inc + 100.12;

        datas[0].value = datas[0].value + inc;

        $scope.maxValue = datas[0].value <= 2132929.372 ? $scope.maxValue : datas[0].value;

        $scope.states = datas;

        $scope.date.setDate(date.getDate() + 1);

        if(i <= 365) {
          myLoop();
        }
        
        i++;

    }, function () {
        console.log("Timer rejected!");
    });
}

myLoop();

$scope.$on("$destroy", function (event) {
  $timeout.cancel(timer);
});

});