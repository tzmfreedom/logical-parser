// Generated from lib/logical.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by logicalParser.
function logicalListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

logicalListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
logicalListener.prototype.constructor = logicalListener;

// Enter a parse tree produced by logicalParser#compilationUnit.
logicalListener.prototype.enterCompilationUnit = function(ctx) {
};

// Exit a parse tree produced by logicalParser#compilationUnit.
logicalListener.prototype.exitCompilationUnit = function(ctx) {
};


// Enter a parse tree produced by logicalParser#expression.
logicalListener.prototype.enterExpression = function(ctx) {
};

// Exit a parse tree produced by logicalParser#expression.
logicalListener.prototype.exitExpression = function(ctx) {
};


// Enter a parse tree produced by logicalParser#primary.
logicalListener.prototype.enterPrimary = function(ctx) {
};

// Exit a parse tree produced by logicalParser#primary.
logicalListener.prototype.exitPrimary = function(ctx) {
};



exports.logicalListener = logicalListener;