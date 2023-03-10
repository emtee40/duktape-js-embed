function test() {
    var tmp1 = [];
    var tmp2 = [];
    var i, n, buf;

    print('build');
    buf = new Uint8Array(1024);
    for (i = 0; i < 1024; i++) {
        buf[i] = Math.random() * 128;  // restrict to ASCII
    }
    tmp1 = new TextDecoder().decode(buf);
    print(tmp1.length);
    for (i = 0; i < 1024; i++) {
        tmp2.push(tmp1);
    }
    tmp2 = new TextEncoder().encode(tmp2.join(''));
    print(tmp2.length);

    print('run');
    for (i = 0; i < 5000; i++) {
        // Assigning to 'res' avoids garbage collection of result; this is
        // intentional to avoid mixing string intern performance to the test.
        var res = Duktape.enc('hex', tmp2);
    }
}

test();
