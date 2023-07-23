const { fixture, test, Selector } = require("testcafe")

const iframeName = Selector("iframe#mce_0_ifr"),
    textArea = Selector("body#tinymce.mce-content-body")

fixture("iframe fixture")
    .page("https://the-internet.herokuapp.com/iframe")


test("First test cafe - iframe", async t => {
    await t
        .switchToIframe(iframeName)
        .click(textArea)
        .pressKey('ctrl+a delete')
        .typeText(textArea, 'hello from TAU')
        .expect(textArea.innerText).contains('TAU')
        .switchToMainWindow()
})
