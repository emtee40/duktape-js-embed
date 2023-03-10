/*
 *  https://github.com/svaarala/duktape/issues/2019
 */

/*===
NaN
NaN
0
Infinity
0
-Infinity
0
NaN
NaN
0
Infinity
0
-Infinity
0
NaN
NaN
0
-Infinity
0
Infinity
0
NaN
NaN
0
-Infinity
0
Infinity
0
===*/

print(+'+');
print(+'-');
print(+'+0');
print(1 / +'+0');
print(+'-0');
print(1 / +'-0');
print(+'');

print(+'  +  ');
print(+'  -  ');
print(+'  +0  ');
print(1 / +'  +0  ');
print(+'  -0  ');
print(1 / +'  -0  ');
print(+'  ');

print(-'+');
print(-'-');
print(-'+0');
print(1 / -'+0');
print(-'-0');
print(1 / -'-0');
print(-'');

print(-'  +  ');
print(-'  -  ');
print(-'  +0  ');
print(1 / -'  +0  ');
print(-'  -0  ');
print(1 / -'  -0  ');
print(-'  ');
