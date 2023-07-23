const { fixture, test, Selector } = require("testcafe")

const dropdown = Selector("select#preferred-interface"),
    option = dropdown.find("option")

fixture("dropdownlist fixture")
    .page("https://devexpress.github.io/testcafe/example/")


test("First test cafe - dropdownlist", async t => {
    await t
        .click(dropdown)
        .click(option.withText('Both'))
})
