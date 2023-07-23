const { fixture, test, Selector } = require("testcafe");

const triedcheckbox = Selector("label").withText("I have tried TestCafe"),
    slider = Selector('#slider')

fixture("First fixture")
    .page("https://devexpress.github.io/testcafe/example/")


test("drag and houver test cafe", async t => {
    await t
        .setTestSpeed(0.01)
        .click(triedcheckbox)
        .drag(slider, 360, 0, { offsetX: 10 })
})