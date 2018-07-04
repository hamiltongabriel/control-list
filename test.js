import test from 'ava';

test('teste2', t => {
	t.pass();
});
test('bar', async t => {
	const bar = Promise.resolve('teste1');
	t.is(await bar, 'teste1');
});
