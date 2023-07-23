const { fixture, test, Selector } = require("testcafe")

const fileupload = Selector("input#file-upload"),
    uploadFileButton = Selector("input#file-submit.button")

fixture("upload fixture")
    .page("https://the-internet.herokuapp.com/upload")


test("First test cafe - upload", async t => {
    await t
        .setFilesToUpload(fileupload, '../foto.png')
        .click(uploadFileButton)
})
