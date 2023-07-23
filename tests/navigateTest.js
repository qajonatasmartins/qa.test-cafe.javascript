const { fixture, test } = require("testcafe")

fixture("First fixture - Navigate")
    .page("https://devexpress.github.io/testcafe/example/")


test("First test cafe - navigate", async t => {
    await t
        .navigateTo("http://www.google.com.br")
})
