// Combinators

// Idiot     Identity
I = (a) => a;
// Mockingbird      self-application
M = (a) => a(a);
// Ketsrel      true, first, const
K = (a) => (b) => a;
// Kite          false, second
KI = (a) => (b) => b;
// Cardinal      reverse arguments
C = (f) => (a) => (b) => f(b)(a)
// BlueBird      Composition
B = (f) => (g) => (a) => f(g(a))
// BlackBird      Composition
B1 = (f) => (g) => (a) => b => f(g(a)(b))
// Thrush       hold an argument
T = (a) => (b) => b(a)
// Vireo        Data Structure pair
V = a => b => f => f(a)(b)





// Booleans

// True
True = K
// False
False = KI
// NOT
Not = (a) => a(False)(True)
// AND
And = (a) => (b) => a(b)(a);
// OR
Or = (a) => (b) => a(a)(b);
// Equality
Beq = (a) => (b) => a(b)(Not(b));


// Numerals

//utils
jsnum = (n) => n(x=>x+1)(0)

// Once and for all
N0 = (f) => (a) => a
N1 = (f) => (a) => f(a)
N2 = (f) => (a) => f(f(a))
N3 = (f) => (a) => f(f(f(a)))
N4 = (f) => (a) => f(f(f(f(a))))

// Arithmetic
// Successor n+1
// Succ = (n) => (f) => (a) => f(n(f)(a))
Succ = (n) => (f) => B(f)(n(f))

// Addition a+b
Add = (n) => (m) => n(Succ)(m)

// Multiply a*b
// B = (a) => (b) => (f) => a(b(f))
Mult = B

// pow a^b
// Pow = (a) => (b) => (b(Mult(a)))(Once)
// Pow = (a) => (b) => b(a)
Pow = T


// Utils
IsZero = a => a(True(False))(True)



// First         Pair first
Fst = p => p(K)
// Second       Pair second
Scn = p => p(KI)
// PHI          next pair
Phi = p => V(Scn(p))(Succ(Scn(p)))
// Predecessor  n=n-1
Pred = n => Fst( n(Phi)(V(N0)(N0)) )


// normal Arithmetic
// Subtraction  n-k
Sub = n => k => k(Pred)(n)
// LEQ  n<=k
Leq = n => k=> IsZero(Sub(n)(k))

// Greater  n>k
// Gt = n => k=> Not(Leq(n)(k))
Gt = B1(Not)(Leq)

// EQ  n==k
Eq = n => k=> And(Leq(n)(k))(Leq(k)(n))





