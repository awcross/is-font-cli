import test from 'ava';
import isFont from 'is-font';

function check(filename) {
	const font = isFont(filename);

	if (font) {
		return font.ext;
	}

	return false;
}

test('Detect if files are fonts', t => {
	t.is(check('./fixture/real.woff2'), 'woff2');
	t.is(check('./fixture/fake.ttf'), false);
});
