const { fixture, test, Selector } = require("testcafe")

const developerName = Selector("#developer-name"),
    osOptions = Selector("#macos"),
    btnSubmit = Selector("#submit-button")

fixture.meta("version", "1")
    ("First fixture - Metadata")
    .page("https://devexpress.github.io/testcafe/example/")


test.meta("env", "production")
    ("First test cafe - Com metadados", async t => {
        await t
            .typeText(developerName, "TAU")
            .click(osOptions)
            .click(btnSubmit)
    })

test("Second test cafe - Sem metadados", async t => {
    await t
        .typeText(developerName, "TAU")
        .click(osOptions)
        .click(btnSubmit)
})

/**
 * Execute o comando no terminal: testcafe chrome tests/firstMetaScriptTest.js --test-meta env=production
 * Comando vai executar somente quem tiver os metadados
 */