// Generated from lib/logical.g4 by ANTLR 4.7.1
// jshint ignore: start
const antlr4 = require('antlr4/index');
const LogicalVisitor = require('./logicalVisitor').logicalVisitor
// This class defines a complete generic visitor for a parse tree produced by logicalParser.

const OPERATOR_MAP = {
  '&&': 'AND',
  '||': 'OR',
  'AND': 'AND',
  'OR': 'OR',
}

function logicalAstBuilder() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

logicalAstBuilder.prototype = Object.create(LogicalVisitor.prototype);
logicalAstBuilder.prototype.constructor = logicalAstBuilder;

// Visit a parse tree produced by logicalParser#compilationUnit.
logicalAstBuilder.prototype.visitCompilationUnit = function(ctx) {
  return ctx.expression().accept(this)
};


// Visit a parse tree produced by logicalParser#expression.
logicalAstBuilder.prototype.visitExpression = function(ctx) {
  if (ctx.primary()) {
    return ctx.primary().accept(this)
  } else {
    const left = ctx.expression()[0].accept(this)
    const right= ctx.expression()[1].accept(this)
    const operator = OPERATOR_MAP[ctx.op.text]
    return {
      type: 'operator',
      left,
      right,
      operator,
    }
  }
};


// Visit a parse tree produced by logicalParser#primary.
logicalAstBuilder.prototype.visitPrimary = function(ctx) {
  if (ctx.Identifier()) {
    return {
      type: 'value',
      value: ctx.Identifier().getText()
    }
  } else {
    return ctx.expression().accept(this)
  }
};



exports.logicalAstBuilder = logicalAstBuilder;