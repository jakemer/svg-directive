// SVG Directive karma/jasmine test
//
// ;(function() {
// 'use strict'
//
// describe('svgInclude', function () {
//   var $compile;
//   var $log;
//   var $http;
//   var $scope;
//   var $timeout;
//   var el;
//   var $httpBackend;
//
//   beforeEach(inject(function($rootScope, _$timeout_, _$compile_, _$log_, _$http_, _$httpBackend_) {
//     $compile = _$compile_;
//     $log = _$log_;
//     $timeout = _$timeout_;
//     $scope = $rootScope.$new();
//     $http = _$http_;
//     $httpBackend = _$httpBackend_;
//   }));
//
//   afterEach(function() {
//     $httpBackend.verifyNoOutstandingExpectation();
//     $httpBackend.verifyNoOutstandingRequest();
//   });
//
//   function compileDirective(tpl) {
//     el = $compile(tpl)($scope);
//     $scope.$digest();
//     $timeout.flush();
//   }
//
//   it('should error if filename name is blank', function() {
//     spyOn($log, 'error');
//     spyOn($http, 'get');
//
//     compileDirective('<svg-include filename="\'\'"></svg-include>');
//
//     expect($log.error).toHaveBeenCalled();
//     expect($http.get).not.toHaveBeenCalled();
//   });
//
//   it('should make a request for the svg if name is provided', function() {
//     $httpBackend.expectGET('/icons/bogus-name.svg')
//       .respond('<svg></svg>');
//
//     compileDirective('<svg-include filename="\'bogus-name\'"></svg-include>');
//
//     $httpBackend.flush();
//   });
//
//   it('should output svg into html in place of itself', function() {
//     $httpBackend.expectGET('/icons/bogus-name.svg')
//       .respond('<svg></svg>');
//
//     compileDirective('<div><svg-include filename="\'bogus-name\'"></svg-include></div>');
//
//     $httpBackend.flush();
//
//     expect(el.children().length).toEqual(1);
//     expect(el.children('svg').length).toEqual(1);
//   });
//
//   it('should copy classes of original element onto the svg', function() {
//     $httpBackend.expectGET('/icons/bogus-name.svg')
//       .respond('<svg></svg>');
//
//     compileDirective(
//       '<div>'+
//         '<svg-include filename="\'bogus-name\'" class="foo bar"></svg-include>'+
//       '</div>'
//     );
//
//     $httpBackend.flush();
//
//     expect(el.children('svg').hasClass('foo')).toBe(true);
//     expect(el.children('svg').hasClass('bar')).toBe(true);
//   });
// });
//
// })();
