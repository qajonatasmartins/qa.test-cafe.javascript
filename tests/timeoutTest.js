const { fixture, test } = require("testcafe");

fixture("First fixture")
    .page("https://devexpress.github.io/testcafe/example/")


test.timeouts(0)
    ("timeout test cafe", async t => {
        await t
            .typeText("#developer-name", "TAU")
            .click("#macos")
            .click("#submit-button")
    })