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

            assert.isFunction(ns.PersonView.prototype.findFirstName);
            assert.isFunction(ns.PersonView.prototype.findLastNames);

            var personView = new ns.PersonView();

            assert.same(personView.findFirstName().innerHTML, 'first');
            assert.isArray(personView.findLastNames());
            assert.same(personView.findLastNames().length, 2);
            assert.same(personView.findLastNames()[0].innerHTML, 'last');
            assert.same(personView.findLastNames()[1].innerHTML, 'other last');
        }

    });

}());
