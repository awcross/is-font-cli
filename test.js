import test from 'ava';
import isFont from 'is-font';

function check(filename) {
	const obj = isFont(filename);
	return obj ? obj.ext : false;
}

test(t => {
	t.is(check('./fixture/real.woff2'), 'woff2');
	t.is(check('./fixture/fake.ttf'), false);
});
