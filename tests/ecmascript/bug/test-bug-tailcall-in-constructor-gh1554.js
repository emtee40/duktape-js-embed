/*===
object
===*/

function replacement() {
    //console.trace();
    return null;
}

function MyConstructor() {
    return replacement();
}

function test() {
    var O = new MyConstructor();
    print(typeof O);
}

test();
