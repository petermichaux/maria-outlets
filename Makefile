.PHONY: clean

SRCS = src/header.js    \
       src/outlets.js

build: $(SRCS)
	mkdir -p build
	cat $(SRCS) >build/maria-outlets.js
	jsmin <build/maria-outlets.js >build/maria-outlets-tmp.js
	cat src/header.js build/maria-outlets-tmp.js >build/maria-outlets-min.js
	rm build/maria-outlets-tmp.js
	echo "define(['maria-amd'], function(maria) { // AMD" > build/maria-outlets-amd.js
	cat build/maria-outlets.js >> build/maria-outlets-amd.js
	echo "\n}); // AMD" >> build/maria-outlets-amd.js
	cp README.md build
	cp LICENSE build

clean:
	rm -rf build
