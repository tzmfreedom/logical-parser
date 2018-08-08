const antlr4 = require('antlr4');
const LogicalParser = require('./logicalParser').logicalParser;
const LogicalLexer = require('./logicalLexer').logicalLexer;
const LogicalAstBuilder = require('./logical-ast-builder').logicalAstBuilder;

module.exports = (input) => {
  const chars = new antlr4.InputStream(input);
  const lexer = new LogicalLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new LogicalParser(tokens);
  parser.buildParseTrees = true;
  const tree = parser.compilationUnit()

  const visitor = new LogicalAstBuilder();

  return visitor.visit(tree)
}
