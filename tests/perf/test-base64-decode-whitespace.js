function test() {
    var tmp1 = [];
    var tmp2 = [];
    var tmp3 = [];
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
    tmp2 = tmp2.join('');
    print(tmp2.length);

    tmp2 = Duktape.enc('base64', tmp2);
    print(tmp2.length);

    // add newlines, intentionally not a multiple of 4
    for (i = 0; i < tmp2.length; i += 77) {
       tmp3.push(tmp2.substring(i, i + 77));
    }
    tmp2 = tmp3.join('\n') + '\n';
    print(tmp2.length);

    print('run');
    var t1 = Date.now();
    var loopCount = 2000;
    for (i = 0; i < loopCount; i++) {
        // Assigning to 'res' avoids garbage collection of result; this is
        // intentional to avoid mixing string intern performance to the test.
        var res = Duktape.dec('base64', tmp2);
    }
    var t2 = Date.now();
    print(((tmp2.length * loopCount) / (1024 * 1024)) / (t2 - t1) + ' megabytes/millisecond');
}

test();
