/*
 *  https://github.com/svaarala/duktape/issues/2030
 */

/*---
custom: true
---*/

/*===
===*/

Duktape.fin(
    Proxy, function( ) {
        function f( ) {
            performance ('g called', isFinite(Error), TypeError(g));
        }
        Duktape.Thread.resume(new Duktape.Thread(f));
});
