async function main () {
	const client = await wdio.remote(opts);

	const field = await client.$("android.widget.EditText");
	await field.setValue("Hello World!");
	const value = await field.getText();
	assert.strictEqual(value,"Hello World!");

	await client.deleteSession();
}

main();
