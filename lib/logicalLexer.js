// Generated from lib/logical.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u000b\u00a0\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0004\u001b\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e",
    "\t\u001e\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#",
    "\t#\u0004$\t$\u0004%\t%\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\b\u0006\b^\n\b\r\b\u000e\b_\u0003\t\u0003\t\u0003",
    "\n\u0003\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003",
    "\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003",
    "\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003",
    "\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003",
    "\u0017\u0003\u0017\u0003\u0018\u0003\u0018\u0003\u0019\u0003\u0019\u0003",
    "\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0003\u001c\u0003\u001c\u0003",
    "\u001d\u0003\u001d\u0003\u001e\u0003\u001e\u0003\u001f\u0003\u001f\u0003",
    " \u0003 \u0003!\u0003!\u0003\"\u0003\"\u0003#\u0003#\u0003$\u0003$\u0003",
    "%\u0006%\u009b\n%\r%\u000e%\u009c\u0003%\u0003%\u0002\u0002&\u0003\u0003",
    "\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013",
    "\u0002\u0015\u0002\u0017\u0002\u0019\u0002\u001b\u0002\u001d\u0002\u001f",
    "\u0002!\u0002#\u0002%\u0002\'\u0002)\u0002+\u0002-\u0002/\u00021\u0002",
    "3\u00025\u00027\u00029\u0002;\u0002=\u0002?\u0002A\u0002C\u0002E\u0002",
    "G\u0002I\u000b\u0003\u0002\u001e\u0006\u0002\u000b\f\u000e\u000f\"\"",
    "*+\u0004\u0002CCcc\u0004\u0002DDdd\u0004\u0002EEee\u0004\u0002FFff\u0004",
    "\u0002GGgg\u0004\u0002HHhh\u0004\u0002IIii\u0004\u0002JJjj\u0004\u0002",
    "KKkk\u0004\u0002LLll\u0004\u0002MMmm\u0004\u0002NNnn\u0004\u0002OOo",
    "o\u0004\u0002PPpp\u0004\u0002QQqq\u0004\u0002RRrr\u0004\u0002SSss\u0004",
    "\u0002TTtt\u0004\u0002UUuu\u0004\u0002VVvv\u0004\u0002WWww\u0004\u0002",
    "XXxx\u0004\u0002YYyy\u0004\u0002ZZzz\u0004\u0002[[{{\u0004\u0002\\\\",
    "||\u0005\u0002\u000b\f\u000e\u000f\"\"\u0002\u0086\u0002\u0003\u0003",
    "\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003",
    "\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003",
    "\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003",
    "\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002I\u0003",
    "\u0002\u0002\u0002\u0003K\u0003\u0002\u0002\u0002\u0005N\u0003\u0002",
    "\u0002\u0002\u0007Q\u0003\u0002\u0002\u0002\tS\u0003\u0002\u0002\u0002",
    "\u000bU\u0003\u0002\u0002\u0002\rY\u0003\u0002\u0002\u0002\u000f]\u0003",
    "\u0002\u0002\u0002\u0011a\u0003\u0002\u0002\u0002\u0013c\u0003\u0002",
    "\u0002\u0002\u0015e\u0003\u0002\u0002\u0002\u0017g\u0003\u0002\u0002",
    "\u0002\u0019i\u0003\u0002\u0002\u0002\u001bk\u0003\u0002\u0002\u0002",
    "\u001dm\u0003\u0002\u0002\u0002\u001fo\u0003\u0002\u0002\u0002!q\u0003",
    "\u0002\u0002\u0002#s\u0003\u0002\u0002\u0002%u\u0003\u0002\u0002\u0002",
    "\'w\u0003\u0002\u0002\u0002)y\u0003\u0002\u0002\u0002+{\u0003\u0002",
    "\u0002\u0002-}\u0003\u0002\u0002\u0002/\u007f\u0003\u0002\u0002\u0002",
    "1\u0081\u0003\u0002\u0002\u00023\u0083\u0003\u0002\u0002\u00025\u0085",
    "\u0003\u0002\u0002\u00027\u0087\u0003\u0002\u0002\u00029\u0089\u0003",
    "\u0002\u0002\u0002;\u008b\u0003\u0002\u0002\u0002=\u008d\u0003\u0002",
    "\u0002\u0002?\u008f\u0003\u0002\u0002\u0002A\u0091\u0003\u0002\u0002",
    "\u0002C\u0093\u0003\u0002\u0002\u0002E\u0095\u0003\u0002\u0002\u0002",
    "G\u0097\u0003\u0002\u0002\u0002I\u009a\u0003\u0002\u0002\u0002KL\u0007",
    "(\u0002\u0002LM\u0007(\u0002\u0002M\u0004\u0003\u0002\u0002\u0002NO",
    "\u0007~\u0002\u0002OP\u0007~\u0002\u0002P\u0006\u0003\u0002\u0002\u0002",
    "QR\u0007*\u0002\u0002R\b\u0003\u0002\u0002\u0002ST\u0007+\u0002\u0002",
    "T\n\u0003\u0002\u0002\u0002UV\u0005\u0013\n\u0002VW\u0005-\u0017\u0002",
    "WX\u0005\u0019\r\u0002X\f\u0003\u0002\u0002\u0002YZ\u0005/\u0018\u0002",
    "Z[\u00055\u001b\u0002[\u000e\u0003\u0002\u0002\u0002\\^\u0005\u0011",
    "\t\u0002]\\\u0003\u0002\u0002\u0002^_\u0003\u0002\u0002\u0002_]\u0003",
    "\u0002\u0002\u0002_`\u0003\u0002\u0002\u0002`\u0010\u0003\u0002\u0002",
    "\u0002ab\n\u0002\u0002\u0002b\u0012\u0003\u0002\u0002\u0002cd\t\u0003",
    "\u0002\u0002d\u0014\u0003\u0002\u0002\u0002ef\t\u0004\u0002\u0002f\u0016",
    "\u0003\u0002\u0002\u0002gh\t\u0005\u0002\u0002h\u0018\u0003\u0002\u0002",
    "\u0002ij\t\u0006\u0002\u0002j\u001a\u0003\u0002\u0002\u0002kl\t\u0007",
    "\u0002\u0002l\u001c\u0003\u0002\u0002\u0002mn\t\b\u0002\u0002n\u001e",
    "\u0003\u0002\u0002\u0002op\t\t\u0002\u0002p \u0003\u0002\u0002\u0002",
    "qr\t\n\u0002\u0002r\"\u0003\u0002\u0002\u0002st\t\u000b\u0002\u0002",
    "t$\u0003\u0002\u0002\u0002uv\t\f\u0002\u0002v&\u0003\u0002\u0002\u0002",
    "wx\t\r\u0002\u0002x(\u0003\u0002\u0002\u0002yz\t\u000e\u0002\u0002z",
    "*\u0003\u0002\u0002\u0002{|\t\u000f\u0002\u0002|,\u0003\u0002\u0002",
    "\u0002}~\t\u0010\u0002\u0002~.\u0003\u0002\u0002\u0002\u007f\u0080\t",
    "\u0011\u0002\u0002\u00800\u0003\u0002\u0002\u0002\u0081\u0082\t\u0012",
    "\u0002\u0002\u00822\u0003\u0002\u0002\u0002\u0083\u0084\t\u0013\u0002",
    "\u0002\u00844\u0003\u0002\u0002\u0002\u0085\u0086\t\u0014\u0002\u0002",
    "\u00866\u0003\u0002\u0002\u0002\u0087\u0088\t\u0015\u0002\u0002\u0088",
    "8\u0003\u0002\u0002\u0002\u0089\u008a\t\u0016\u0002\u0002\u008a:\u0003",
    "\u0002\u0002\u0002\u008b\u008c\t\u0017\u0002\u0002\u008c<\u0003\u0002",
    "\u0002\u0002\u008d\u008e\t\u0018\u0002\u0002\u008e>\u0003\u0002\u0002",
    "\u0002\u008f\u0090\t\u0019\u0002\u0002\u0090@\u0003\u0002\u0002\u0002",
    "\u0091\u0092\t\u001a\u0002\u0002\u0092B\u0003\u0002\u0002\u0002\u0093",
    "\u0094\t\u001b\u0002\u0002\u0094D\u0003\u0002\u0002\u0002\u0095\u0096",
    "\t\u001c\u0002\u0002\u0096F\u0003\u0002\u0002\u0002\u0097\u0098\u0007",
    "\"\u0002\u0002\u0098H\u0003\u0002\u0002\u0002\u0099\u009b\t\u001d\u0002",
    "\u0002\u009a\u0099\u0003\u0002\u0002\u0002\u009b\u009c\u0003\u0002\u0002",
    "\u0002\u009c\u009a\u0003\u0002\u0002\u0002\u009c\u009d\u0003\u0002\u0002",
    "\u0002\u009d\u009e\u0003\u0002\u0002\u0002\u009e\u009f\b%\u0002\u0002",
    "\u009fJ\u0003\u0002\u0002\u0002\u0005\u0002_\u009c\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function logicalLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

logicalLexer.prototype = Object.create(antlr4.Lexer.prototype);
logicalLexer.prototype.constructor = logicalLexer;

Object.defineProperty(logicalLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

logicalLexer.EOF = antlr4.Token.EOF;
logicalLexer.T__0 = 1;
logicalLexer.T__1 = 2;
logicalLexer.T__2 = 3;
logicalLexer.T__3 = 4;
logicalLexer.AND = 5;
logicalLexer.OR = 6;
logicalLexer.Identifier = 7;
logicalLexer.LetterOrDigit = 8;
logicalLexer.WS = 9;

logicalLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

logicalLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

logicalLexer.prototype.literalNames = [ null, "'&&'", "'||'", "'('", "')'" ];

logicalLexer.prototype.symbolicNames = [ null, null, null, null, null, "AND", 
                                         "OR", "Identifier", "LetterOrDigit", 
                                         "WS" ];

logicalLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "T__3", "AND", 
                                     "OR", "Identifier", "LetterOrDigit", 
                                     "A", "B", "C", "D", "E", "F", "G", 
                                     "H", "I", "J", "K", "L", "M", "N", 
                                     "O", "P", "Q", "R", "S", "T", "U", 
                                     "V", "W", "X", "Y", "Z", "SPACE", "WS" ];

logicalLexer.prototype.grammarFileName = "logical.g4";



exports.logicalLexer = logicalLexer;

