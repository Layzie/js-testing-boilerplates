test:
	grunt test

init-testing:
	git submodule add https://github.com/visionmedia/mocha.git test/vendor/mocha
	git submodule add https://github.com/chaijs/chai.git test/vendor/chai
	git submodule add https://github.com/domenic/sinon-chai.git test/vendor/sinon-chai
	git submodule init
	mkdir -p test/vendor/sinon/
	wget -O test/vendor/sinon/sinon.js http://sinonjs.org/releases/sinon-1.5.2.js
	npm install

update-testing:
	git submodule update
	npm install

.PHONY: test init-testing update-testing
