/*
 *  Test addition when it involves a NaN, which matters on x86.
 */

function test() {
    var i;
    var x = 0 / 0;
    var y = 234.5;  // not fastint
    var t;

    for (i = 0; i < 1e7; i++) {
        t = x + y;
        t = x + y;
        t = x + y;
        t = x + y;
        t = x + y;
        t = x + y;
        t = x + y;
        t = x + y;
        t = x + y;
        t = x + y;
    }
}

test();
