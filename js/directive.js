'use strict';

/* App Module */
var directives = angular.module('directives', []);

// derective auto width
directives.directive('autoWidth', function ($window) {
  return {
    restrict: 'A',
    scope: {
      element: '@',
      parent: '@'
    },
    link: function (scope, element, attrs) {
      var ele = angular.element(scope.element),
        parent = angular.element(scope.parent),
        window = angular.element($window);
      setWidth();

      window.on('resize', function () {
        setWidth();
      })

      function setWidth() {
        var width = parent.outerWidth() - ele.outerWidth();
        element.css({'width': width})
      }
    }
  }
});
// center screen
directives.directive('centerScreen', function ($window) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var parent = angular.element(scope.parent),
                window = angular.element($window);

           
            setPosition();
            window.on('resize', function () {
                setPosition();
            });
            
            function setPosition() {
                var top = (window.outerHeight() - element.outerHeight())/2,
                    left = (window.outerWidth() - element.outerWidth())/2;
                element.css({'top': top, 'left': left});
            }
        }
    }
})
// draw chart
directives.directive('drawChart', function ($window) {
  return {
    restrict: 'A',
    scope: {
      chartLabel: '=chartLabel',
      chartData: '=chartValue'
    },
    link: function (scope, element, attrs) {
      // console.log(scope.chartLabel)
      var window = angular.element($window);
      var fontXAxis = 10;

      var ctx = element[0].getContext('2d');
      var lineChartData = {
              labels : scope.chartLabel,
              datasets : [
                  {
                      label: "Active",
                      fillColor : "transparent",
                      strokeColor : "#f4961c",
                      pointColor : ['#fff'],
                      pointStrokeColor : "#f4961c",
                      data: scope.chartData[0]
                  }
              ]

          };
          new Chart(ctx).Line(lineChartData, {
              scaleShowVerticalLines: false,
              scaleShowHorizontalLines: true,
              bezierCurveTension : 0.4,
              pointDot : true,
              pointDotRadius : 4,
              pointDotStrokeWidth: 2,
              datasetStroke : true,
              datasetStrokeWidth : 3,
              datasetFill : true,
              bezierCurve : false,
              scaleShowLabels: true,
              tooltipTemplate: "<%=value%>,000",
              multiTooltipTemplate: "<%= datasetLabel %> <%=value%>",
              fillColor: "rgba(220,220,220,0.2)",
              scaleFontColor: '#333333',
              scaleFontSize: fontXAxis,
              scaleLineColor: 'transparent',
              scaleOverride: true,
              scaleSteps: 5,
              scaleStepWidth: 5,
              scaleStartValue: 0,
              tooltipCornerRadius: 5,
              tooltipEvents: ["click","mousemove","mouseout"],
              showTooltips: true,
              tooltipXPadding: 14,
              tooltipYPadding: 8,
              tooltipFillColor: "#f4961c",
              tooltipTitleFontSize: 15,
              tooltipCaretSize: 6,
              responsive: false,
              rangeColor: [0]
          });
    }
  }
});
directives.directive('drawChartTwo', function ($window) {
  return {
    restrict: 'A',
    scope: {
      chartLabel: '=chartLabel',
      chartData: '=chartValue'
    },
    link: function (scope, element, attrs) {
      // console.log(scope.chartLabel)
      var window = angular.element($window);
      var fontXAxis = 10;

      var ctx = element[0].getContext('2d');
      var lineChartData = {
              labels : scope.chartLabel,
              datasets : [
                  {
                      label: "Active",
                      fillColor : "transparent",
                      strokeColor : "#b6c023",
                      pointColor : ['#fff'],
                      pointStrokeColor : "#b6c023",
                      data: scope.chartData[0]
                  }
              ]

          };
          new Chart(ctx).Line(lineChartData, {
              scaleShowVerticalLines: false,
              scaleShowHorizontalLines: true,
              bezierCurveTension : 0.4,
              pointDot : true,
              pointDotRadius : 4,
              pointDotStrokeWidth: 2,
              datasetStroke : true,
              datasetStrokeWidth : 3,
              datasetFill : true,
              bezierCurve : false,
              scaleShowLabels: true,
              tooltipTemplate: "<%=value%>,000",
              multiTooltipTemplate: "<%= datasetLabel %> <%=value%>",
              fillColor: "rgba(220,220,220,0.2)",
              scaleFontColor: '#333333',
              scaleFontSize: fontXAxis,
              scaleLineColor: 'transparent',
              scaleOverride: true,
              scaleSteps: 5,
              scaleStepWidth: 5,
              scaleStartValue: 0,
              tooltipCornerRadius: 5,
              tooltipEvents: ["click","mouseout"],
              showTooltips: true,
              tooltipXPadding: 14,
              tooltipYPadding: 8,
              tooltipFillColor: "#b6c023",
              tooltipTitleFontSize: 15,
              tooltipCaretSize: 6,
              responsive: false,
              rangeColor: [0]
          });
    }
  }
});