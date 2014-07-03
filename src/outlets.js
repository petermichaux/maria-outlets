(function() {

    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    maria.ElementView.subclass = (function() {
        var original = maria.ElementView.subclass;
        return function(namespace, name, options) {
            options = options || {};
            var outlets = options.outlets;
            var properties = options.properties = options.properties || {};

            if (outlets) {
                for (var key in outlets) {
                    if (Object.prototype.hasOwnProperty.call(outlets, key)) {

                        var methodName = 'get' + capitalize(key.replace(/\[\]$/, ''));
                        var finder = /\[\]$/.test(key) ? 'findAll' : 'find';
                        var selector = outlets[key];

                        if ((!Object.prototype.hasOwnProperty.call(properties, methodName)) &&
                            (!(methodName in this.prototype))) {
                            (function(methodName, finder, selector) {
                                properties[methodName] = function() {
                                    return this[finder](selector);
                                };
                            }(methodName, finder, selector));
                        }
                    }
                }
            }

            return original.call(this, namespace, name, options);
        };
    }());

}());
