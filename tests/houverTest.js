const { fixture, test } = require("testcafe");

fixture("First fixture")
    .page("https://devexpress.github.io/testcafe/example/")


test("houver test cafe", async t => {
    await t
        .setTestSpeed(0.01)
        .hover('input#populate')
})