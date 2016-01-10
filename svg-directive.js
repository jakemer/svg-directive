angular.module('portfolioSite', [])
  .directive('svgInclude', function($http, $log) {
    return {
      restrict: 'E',
      scope: {
        filename: '='
      },

      link: function($scope, $element) {
        // Example svg-include directive markup:
        // <svg-include filename="'logo'" class="svg-logo large"></svg-include>

        if (!$scope.filename) return $log.error('svg-include filename attribute cannot be blank')

        var svgUrl = 'assets/images/svg/' + $scope.filename + '.svg'
        $http.get(svgUrl)
          .success(function(result) {
            var svg = angular.element(result);
            var classes = $element.attr('class');
            svg.attr('class', classes);
            $element.replaceWith(svg);
          })
          .error($log.error);
      }
    }
  });
