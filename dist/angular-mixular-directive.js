angular.
/**
 * mixular-directive Module
 *
 * Description
 */
module('mixular-directive', []).directive('mixular', [

    function() {
        // Runs during compile
        return {
            // name: '',
            // priority: 1,
            // terminal: true,
            // scope: {}, // {} = isolate, true = child, false/undefined = no change
            // controller: function($scope, $element, $attrs, $transclude) {},
            // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
            // restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
            // template: '',
            // templateUrl: '',
            // replace: true,
            // transclude: true,
            // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
            link: function($scope, elm, attrs, controller) {
                elm.on(attrs.mixular, function(evnt) {
                    var properties = {};

                    //Add all the attributes that begin with
                    //prop in the properties object.
                    for (key in attrs.$attr) {
                        if (key.indexOf("prop") > -1) {
                            properties[key] = attrs[key];
                        }
                    }

                    //Send the tracking info to mix-panel
                    mixpanel.track(attrs.eventlabel, properties);
                });
            }
        };
    }
]);