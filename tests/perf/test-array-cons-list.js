/*
 *  Create Array using new Array() value list
 */

function test() {
    var arr;
    var i;

    for (i = 0; i < 1e6; i++) {
        arr = new Array('foo', 'bar', 'quux', 'baz', 'quuux',
                        '1', '2', '3', '4', '5',
                        'foo', 'bar', 'quux', 'baz', 'quuux',
                        '1', '2', '3', '4', '5');
    }
}

test();
