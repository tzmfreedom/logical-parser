.PHONY: test
test:
	npx mocha

.PHONY: build
build:
	java -jar /usr/local/bin/antlr4 -Dlanguage=JavaScript -visitor lib/logical.g4

