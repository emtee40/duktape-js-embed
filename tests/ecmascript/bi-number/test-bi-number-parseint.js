/*===
function
true
object
true
false
true
===*/

print(typeof Number.parseInt);
print(Number.parseInt === parseInt);
var pd = Object.getOwnPropertyDescriptor(Number, 'parseInt');
print(typeof pd);
print(pd.writable);
print(pd.enumerable);
print(pd.configurable);
