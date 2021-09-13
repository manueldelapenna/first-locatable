import { firstLocatable } from "../lib/first-locatable.js";
import { strict as assert } from "assert";

describe("first-locatable", function(){
    it("founds test.js", async function(){
        var found = await firstLocatable(["local-testing/test.js"]);
        assert.equal(found, "local-testing/test.js")
    })
    it("doesn't founds inexistent.js", async function(){
        var found = await firstLocatable(["local-testing/inexistent.js"]);
        assert.equal(found, undefined)
    })
    it("founds test.js.map in a list", async function(){
        var found = await firstLocatable([
            "local-testing/inexistent.js",
            "local-testing/test.js.map",
            "local-testing/other-inexistent.js",
            "local-testing/test.js",
        ]);
        assert.equal(found, "local-testing/test.js.map")
    })
    it("doesn't founds any in an empty list", async function(){
        var found = await firstLocatable([]);
        assert.equal(found, undefined)
    })
})