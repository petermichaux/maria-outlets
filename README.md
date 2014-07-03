Maria-Outlets
===============

A plugin for Maria adding outlets to view objects. Inspired by Apple's outlets in Cocoa programming.


Examples
--------

```javascript
maria.ElementView.subclass(contactsApp, 'PersonView', {
    outlets: {
        'firstName': '.firstName',
        'lastNames[]': '.lastName'
    },
    properties: {
        buildData: function() {
            var model = this.getModel();
            var firstName = model.getFirstName();
            var lastName = model.getLastName();
            // use the outlets
            this.findFirstName().innerHTML = firstName;
            this.findLastNames().forEach(function(element) {
                element.innerHTML = lastName;
            });
        }
    }
});
```

The example above is identical in meaning to the following code.

```javascript
maria.ElementView.subclass(contactsApp, 'PersonView', {
    properties: {
        buildData: function() {
            var model = this.getModel();
            var firstName = model.getFirstName();
            var lastName = model.getLastName();
            // use the outlets
            this.findFirstName().innerHTML = firstName;
            this.findLastNames().forEach(function(element) {
                element.innerHTML = lastName;
            });
        },
        findFirstName: function() {
            return this.find('.firstName');
        },
        findLastNames: function() {
            return this.findAll('.lastNames');
        }
    }
});
```


Downloads
---------

See http://peter.michaux.ca/downloads/maria-outlets/ for production ready builds.


Status
------

Ready.


Browser Support
---------------

This implementation is very basic. It should work in all browsers ever made.


Dependencies
------------

Just [Maria](https://github.com/petermichaux/maria).


Build
-----

To build the production ready files, you need [JSMin](http://www.crockford.com/javascript/jsmin.html) or any other tool with the same command line interface. Then just type "make" at the command line and look in the build directory for the results.

For the record, this is how I installed JSMin. Note that I have /Users/peter/bin in my PATH.

```sh
$ cd ~/tmp
$ curl -O https://raw.github.com/douglascrockford/JSMin/master/jsmin.c
$ gcc -o jsmin jsmin.c
$ mv jsmin ~/bin
$ rm jsmin.c
$ which jsmin
/Users/peter/bin/jsmin
```
