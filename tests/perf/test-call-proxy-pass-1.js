/*
 *  Basic Proxy passthrough call performance.
 */

function test() {
    var i;

    function f_target() { return; }

    var f = new Proxy(f_target, {});

    var t1 = Date.now();

    for (i = 0; i < 1e6; i++) {
        f(); f(); f(); f(); f(); f(); f(); f(); f(); f();
        f(); f(); f(); f(); f(); f(); f(); f(); f(); f();
        f(); f(); f(); f(); f(); f(); f(); f(); f(); f();
        f(); f(); f(); f(); f(); f(); f(); f(); f(); f();
        f(); f(); f(); f(); f(); f(); f(); f(); f(); f();
        f(); f(); f(); f(); f(); f(); f(); f(); f(); f();
        f(); f(); f(); f(); f(); f(); f(); f(); f(); f();
        f(); f(); f(); f(); f(); f(); f(); f(); f(); f();
        f(); f(); f(); f(); f(); f(); f(); f(); f(); f();
        f(); f(); f(); f(); f(); f(); f(); f(); f(); f();
    }

    var t2 = Date.now();
    print((1e6 * 100 / (t2 - t1)) + ' calls per millisecond');
}

test();
