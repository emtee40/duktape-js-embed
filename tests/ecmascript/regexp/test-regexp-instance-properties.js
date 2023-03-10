/*
 *  RegExp instance properties.
 *
 *  RegExp instance 'source' property must behave as specified in E5 Section
 *  15.10.4.1 paragraphcs 5 and 6.  Note: there is no one required form of source.
 *  Tests are for the source form that we want.
 */

/* XXX: when does '\' in source need to be escaped? */
/* XXX: add property attribute checks */

function getflags(r) {
    var res = ''
    if (r.global) {
        res += 'g';
    }
    if (r.ignoreCase) {
        res += 'i';
    }
    if (r.multiline) {
        res += 'm';
    }
    return res;
}

/*
 *  Empty string
 */

/*===
(?:)

===*/

t = new RegExp('');
print(t.source);
t = eval('/' + t.source + '/' + getflags(t));
t = t.exec('');
print(t[0]);

/*
 *  Forward slash
 */

/*===
\/
/
===*/

t = new RegExp('/');   /* matches one forward slash (only) */
print(t.source);
t = eval('/' + t.source + '/' + getflags(t));
t = t.exec('/');
print(t[0]);

/*
 *  Backslash
 */

/*===
\d
9
===*/

t = new RegExp('\\d');   /* matches a digit */
print(t.source);
t = eval('/' + t.source + '/' + getflags(t));
t = t.exec('9');
print(t[0]);

/*
 *  Flags
 */

/*===
foo false true false
foo false true false
Foo
foo true false false
foo true false false
foo false false true
foo false false true
===*/

t = new RegExp('foo', 'i');
print(t.source, t.global, t.ignoreCase, t.multiline);
t = eval('/' + t.source + '/' + getflags(t));
print(t.source, t.global, t.ignoreCase, t.multiline);
t = t.exec('Foo');
print(t[0]);

t = new RegExp('foo', 'g');
print(t.source, t.global, t.ignoreCase, t.multiline);
t = eval('/' + t.source + '/' + getflags(t));
print(t.source, t.global, t.ignoreCase, t.multiline);

t = new RegExp('foo', 'm');
print(t.source, t.global, t.ignoreCase, t.multiline);
t = eval('/' + t.source + '/' + getflags(t));
print(t.source, t.global, t.ignoreCase, t.multiline);

/*
 *  lastIndex
 */

/*===
0
===*/

t = new RegExp('foo', 'i');
print(t.lastIndex);
