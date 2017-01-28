import test from 'ava';
import m from 'is-font';

function check(filename) {
	const obj = m(filename);
	return obj ? obj.ext : false;
}

test(t => {
	t.is(check('./fixture/real.woff2'), 'woff2');
	t.false(check('./fixture/fake.ttf'));
});
