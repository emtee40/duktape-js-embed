function target(x) {
}

function test() {
    var f = target;
    var i;

    var t1 = Date.now();

    for (i = 0; i < 1e5; i++) {
        target.call(null, 123); target.call(null, 123); target.call(null, 123); target.call(null, 123); target.call(null, 123);
        target.call(null, 123); target.call(null, 123); target.call(null, 123); target.call(null, 123); target.call(null, 123);
        target.call(null, 123); target.call(null, 123); target.call(null, 123); target.call(null, 123); target.call(null, 123);
        target.call(null, 123); target.call(null, 123); target.call(null, 123); target.call(null, 123); target.call(null, 123);
        target.call(null, 123); target.call(null, 123); target.call(null, 123); target.call(null, 123); target.call(null, 123);
        target.call(null, 123); target.call(null, 123); target.call(null, 123); target.call(null, 123); target.call(null, 123);
        target.call(null, 123); target.call(null, 123); target.call(null, 123); target.call(null, 123); target.call(null, 123);
        target.call(null, 123); target.call(null, 123); target.call(null, 123); target.call(null, 123); target.call(null, 123);
        target.call(null, 123); target.call(null, 123); target.call(null, 123); target.call(null, 123); target.call(null, 123);
        target.call(null, 123); target.call(null, 123); target.call(null, 123); target.call(null, 123); target.call(null, 123);
        target.call(null, 123); target.call(null, 123); target.call(null, 123); target.call(null, 123); target.call(null, 123);
        target.call(null, 123); target.call(null, 123); target.call(null, 123); target.call(null, 123); target.call(null, 123);
        target.call(null, 123); target.call(null, 123); target.call(null, 123); target.call(null, 123); target.call(null, 123);
        target.call(null, 123); target.call(null, 123); target.call(null, 123); target.call(null, 123); target.call(null, 123);
        target.call(null, 123); target.call(null, 123); target.call(null, 123); target.call(null, 123); target.call(null, 123);
        target.call(null, 123); target.call(null, 123); target.call(null, 123); target.call(null, 123); target.call(null, 123);
        target.call(null, 123); target.call(null, 123); target.call(null, 123); target.call(null, 123); target.call(null, 123);
        target.call(null, 123); target.call(null, 123); target.call(null, 123); target.call(null, 123); target.call(null, 123);
        target.call(null, 123); target.call(null, 123); target.call(null, 123); target.call(null, 123); target.call(null, 123);
        target.call(null, 123); target.call(null, 123); target.call(null, 123); target.call(null, 123); target.call(null, 123);
    }

    var t2 = Date.now();
    print((1e5 * 100 / (t2 - t1)) + ' calls per millisecond');
}

test();
