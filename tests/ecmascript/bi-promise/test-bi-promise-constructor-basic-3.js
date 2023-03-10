/*---
duktape_polyfills:
  promise: true
---*/

/*===
- resolve() accepts a single value only
done
fulfilled
1
101
===*/

print('- resolve() accepts a single value only');
var p = new Promise(function (resolve, reject) {
    resolve(101, 102, 103);
});
p.then(function () {
    print('fulfilled');
    print(arguments.length);
    print(Array.prototype.join.call(arguments, ','));
}, function () {
    print('rejected');
    print(arguments.length);
    print(Array.prototype.join.call(arguments, ','));
});

print('done');
