/*
 *  In Duktape 0.12.0 Duktape.gc() would return a boolean value converted
 *  directly from an internal C return value.  However, for that return value
 *  0 means success so that Duktape.gc() would return false on success.
 */

/*---
custom: true
---*/

/*===
true
===*/

print(Duktape.gc());
