(function() {

    buster.testCase('Outlets Suite', {

        "test outlets": function() {

            var ns = {};

            ns.PersonTemplate =
                '<div>' +
                    '<div class="firstName">first</div>' +
                    '<div class="lastName">last</div>' +
                    '<div class="lastName">other last</div>' +
                '</div>';

            maria.ElementView.subclass(ns, 'PersonView', {
                outlets: {
                    'firstName': '.firstName',
                    'lastNames[]': '.lastName'
                }
            });

            assert.isFunction(ns.PersonView.prototype.getFirstName);
            assert.isFunction(ns.PersonView.prototype.getLastNames);

            var personView = new ns.PersonView();

            assert.same(personView.getFirstName().innerHTML, 'first');
            assert.isArray(personView.getLastNames());
            assert.same(personView.getLastNames().length, 2);
            assert.same(personView.getLastNames()[0].innerHTML, 'last');
            assert.same(personView.getLastNames()[1].innerHTML, 'other last');
        }

    });

}());
