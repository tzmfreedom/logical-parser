// Generated from lib/logical.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var logicalListener = require('./logicalListener').logicalListener;
var logicalVisitor = require('./logicalVisitor').logicalVisitor;

var grammarFileName = "logical.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u000b\u001d\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u0003\u0011\n\u0003\f\u0003",
    "\u000e\u0003\u0014\u000b\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0005\u0004\u001b\n\u0004\u0003\u0004\u0002\u0003",
    "\u0004\u0005\u0002\u0004\u0006\u0002\u0003\u0004\u0002\u0003\u0004\u0007",
    "\b\u0002\u001b\u0002\b\u0003\u0002\u0002\u0002\u0004\n\u0003\u0002\u0002",
    "\u0002\u0006\u001a\u0003\u0002\u0002\u0002\b\t\u0005\u0004\u0003\u0002",
    "\t\u0003\u0003\u0002\u0002\u0002\n\u000b\b\u0003\u0001\u0002\u000b\f",
    "\u0005\u0006\u0004\u0002\f\u0012\u0003\u0002\u0002\u0002\r\u000e\f\u0003",
    "\u0002\u0002\u000e\u000f\t\u0002\u0002\u0002\u000f\u0011\u0005\u0004",
    "\u0003\u0004\u0010\r\u0003\u0002\u0002\u0002\u0011\u0014\u0003\u0002",
    "\u0002\u0002\u0012\u0010\u0003\u0002\u0002\u0002\u0012\u0013\u0003\u0002",
    "\u0002\u0002\u0013\u0005\u0003\u0002\u0002\u0002\u0014\u0012\u0003\u0002",
    "\u0002\u0002\u0015\u001b\u0007\t\u0002\u0002\u0016\u0017\u0007\u0005",
    "\u0002\u0002\u0017\u0018\u0005\u0004\u0003\u0002\u0018\u0019\u0007\u0006",
    "\u0002\u0002\u0019\u001b\u0003\u0002\u0002\u0002\u001a\u0015\u0003\u0002",
    "\u0002\u0002\u001a\u0016\u0003\u0002\u0002\u0002\u001b\u0007\u0003\u0002",
    "\u0002\u0002\u0004\u0012\u001a"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'&&'", "'||'", "'('", "')'" ];

var symbolicNames = [ null, null, null, null, null, "AND", "OR", "Identifier", 
                      "LetterOrDigit", "WS" ];

var ruleNames =  [ "compilationUnit", "expression", "primary" ];

function logicalParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

logicalParser.prototype = Object.create(antlr4.Parser.prototype);
logicalParser.prototype.constructor = logicalParser;

Object.defineProperty(logicalParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

logicalParser.EOF = antlr4.Token.EOF;
logicalParser.T__0 = 1;
logicalParser.T__1 = 2;
logicalParser.T__2 = 3;
logicalParser.T__3 = 4;
logicalParser.AND = 5;
logicalParser.OR = 6;
logicalParser.Identifier = 7;
logicalParser.LetterOrDigit = 8;
logicalParser.WS = 9;

logicalParser.RULE_compilationUnit = 0;
logicalParser.RULE_expression = 1;
logicalParser.RULE_primary = 2;

function CompilationUnitContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = logicalParser.RULE_compilationUnit;
    return this;
}

CompilationUnitContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CompilationUnitContext.prototype.constructor = CompilationUnitContext;

CompilationUnitContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

CompilationUnitContext.prototype.enterRule = function(listener) {
    if(listener instanceof logicalListener ) {
        listener.enterCompilationUnit(this);
	}
};

CompilationUnitContext.prototype.exitRule = function(listener) {
    if(listener instanceof logicalListener ) {
        listener.exitCompilationUnit(this);
	}
};

CompilationUnitContext.prototype.accept = function(visitor) {
    if ( visitor instanceof logicalVisitor ) {
        return visitor.visitCompilationUnit(this);
    } else {
        return visitor.visitChildren(this);
    }
};




logicalParser.CompilationUnitContext = CompilationUnitContext;

logicalParser.prototype.compilationUnit = function() {

    var localctx = new CompilationUnitContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, logicalParser.RULE_compilationUnit);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 6;
        this.expression(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = logicalParser.RULE_expression;
    this.op = null; // Token
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;

ExpressionContext.prototype.primary = function() {
    return this.getTypedRuleContext(PrimaryContext,0);
};

ExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ExpressionContext.prototype.AND = function() {
    return this.getToken(logicalParser.AND, 0);
};

ExpressionContext.prototype.OR = function() {
    return this.getToken(logicalParser.OR, 0);
};

ExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof logicalListener ) {
        listener.enterExpression(this);
	}
};

ExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof logicalListener ) {
        listener.exitExpression(this);
	}
};

ExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof logicalVisitor ) {
        return visitor.visitExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};



logicalParser.prototype.expression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 2;
    this.enterRecursionRule(localctx, 2, logicalParser.RULE_expression, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 9;
        this.primary();
        this._ctx.stop = this._input.LT(-1);
        this.state = 16;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new ExpressionContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, logicalParser.RULE_expression);
                this.state = 11;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 12;
                localctx.op = this._input.LT(1);
                _la = this._input.LA(1);
                if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << logicalParser.T__0) | (1 << logicalParser.T__1) | (1 << logicalParser.AND) | (1 << logicalParser.OR))) !== 0))) {
                    localctx.op = this._errHandler.recoverInline(this);
                }
                else {
                	this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 13;
                this.expression(2); 
            }
            this.state = 18;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function PrimaryContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = logicalParser.RULE_primary;
    return this;
}

PrimaryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrimaryContext.prototype.constructor = PrimaryContext;

PrimaryContext.prototype.Identifier = function() {
    return this.getToken(logicalParser.Identifier, 0);
};

PrimaryContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

PrimaryContext.prototype.enterRule = function(listener) {
    if(listener instanceof logicalListener ) {
        listener.enterPrimary(this);
	}
};

PrimaryContext.prototype.exitRule = function(listener) {
    if(listener instanceof logicalListener ) {
        listener.exitPrimary(this);
	}
};

PrimaryContext.prototype.accept = function(visitor) {
    if ( visitor instanceof logicalVisitor ) {
        return visitor.visitPrimary(this);
    } else {
        return visitor.visitChildren(this);
    }
};




logicalParser.PrimaryContext = PrimaryContext;

logicalParser.prototype.primary = function() {

    var localctx = new PrimaryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, logicalParser.RULE_primary);
    try {
        this.state = 24;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case logicalParser.Identifier:
            this.enterOuterAlt(localctx, 1);
            this.state = 19;
            this.match(logicalParser.Identifier);
            break;
        case logicalParser.T__2:
            this.enterOuterAlt(localctx, 2);
            this.state = 20;
            this.match(logicalParser.T__2);
            this.state = 21;
            this.expression(0);
            this.state = 22;
            this.match(logicalParser.T__3);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


logicalParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 1:
			return this.expression_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

logicalParser.prototype.expression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.logicalParser = logicalParser;
