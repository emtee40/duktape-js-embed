/*
 *  Duktape 0.11.0 had a bug where setting a year outside the ECMAScript
 *  range could overflow in integer arithmetic, resulting in an incorrect
 *  year being set.  The test would print:
 *
 *      -093243-12-05T00:00:00.000Z
 *      done
 */

/*===
RangeError
===*/

function test() {
    var d = new Date(0);
    d.setUTCFullYear(-200e6);
    try {
        print(d.toISOString());
    } catch (e) {
        print(e.name);
    }
}

test();
