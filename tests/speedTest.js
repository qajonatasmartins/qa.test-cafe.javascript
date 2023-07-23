const { fixture, test } = require("testcafe");

fixture("First fixture")
    .page("https://devexpress.github.io/testcafe/example/")


test("Speed test cafe", async t => {
    await t
        .setTestSpeed(0.01) //Define o tempo que o teste vai executar cada passo (nesse caso aqui cada passo vc consegue ver devagar)
        .typeText("#developer-name", "TAU")
        .click("#macos")
        .click("#submit-button")
})