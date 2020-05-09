// Combinators

//Idiot     Identity
I = (a) => a;
// Mockingbird      self-application
M = (a) => a(a);
// Ketsrel      true, first, const
K = (a) => (b) => a;
//Kite          false, second
KI = (a) => (b) => b;
//Cardinal      reverse arguments
C = (f) => (a) => (b) => f(b)(a)
//BlueBird      Composition
B = (f) => (g) => (a) => f(g(a))


// Booleans

//True
True = K
//False
False = KI
//NOT
Not = (a) => a(False)(True)
//AND
And = (a) => (b) => a(b)(a);
//OR
Or = (a) => (b) => a(a)(b);
//Equality
Beq = (a) => (b) => a(b)(Not(b));



