grammar logical;

// starting point for parsing a apexcode file
compilationUnit
    :   expression
    ;

expression
    :   primary
    |   expression op=( AND | OR | '&&' | '||' ) expression
    ;

primary
    :   Identifier
    |   '(' expression ')'
    ;

AND : A N D;
OR  : O R;

Identifier
    :   LetterOrDigit+
    ;

LetterOrDigit
    :   ~[ \t\r\n\u000C()]
    ;

fragment A : [aA];
fragment B : [bB];
fragment C : [cC];
fragment D : [dD];
fragment E : [eE];
fragment F : [fF];
fragment G : [gG];
fragment H : [hH];
fragment I : [iI];
fragment J : [jJ];
fragment K : [kK];
fragment L : [lL];
fragment M : [mM];
fragment N : [nN];
fragment O : [oO];
fragment P : [pP];
fragment Q : [qQ];
fragment R : [rR];
fragment S : [sS];
fragment T : [tT];
fragment U : [uU];
fragment V : [vV];
fragment W : [wW];
fragment X : [xX];
fragment Y : [yY];
fragment Z : [zZ];
fragment SPACE : ' ';

WS  :  [ \t\r\n\u000C]+ -> skip
    ;
