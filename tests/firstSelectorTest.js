const { fixture, test, Selector } = require("testcafe")

const developerName = Selector("#developer-name"),
    osOptions = Selector("#macos"),
    btnSubmit = Selector("#submit-button")

fixture("First fixture - Selector")
    .page("https://devexpress.github.io/testcafe/example/")


test("First test cafe with selector", async t => {
    await t
        .typeText(developerName, "TAU")
        .click(osOptions)
        .click(btnSubmit)
})