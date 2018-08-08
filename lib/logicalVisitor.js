// Generated from lib/logical.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by logicalParser.

function logicalVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

logicalVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
logicalVisitor.prototype.constructor = logicalVisitor;

// Visit a parse tree produced by logicalParser#compilationUnit.
logicalVisitor.prototype.visitCompilationUnit = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by logicalParser#expression.
logicalVisitor.prototype.visitExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by logicalParser#primary.
logicalVisitor.prototype.visitPrimary = function(ctx) {
  return this.visitChildren(ctx);
};



exports.logicalVisitor = logicalVisitor;