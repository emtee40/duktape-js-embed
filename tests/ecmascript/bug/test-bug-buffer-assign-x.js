/*
 *  On a Linux MIPS test target 'x' assigned to a buffer coerced into 255
 *  instead of 0.
 */

/*---
custom: true
---*/

/*===
0
0
===*/

var buf = new ArrayBuffer(1);  // Buffer object
new Uint8Array(buf)[0] = 'x';
print(new Uint8Array(buf)[0]);

buf = Duktape.dec('hex', '12');   // plain buffer
buf[0] = 'x';
print(buf[0]);
