import * as beam from "apache-beam";
import * as runner from "apache-beam/runners/runner";
import * as testing from "apache-beam/testing/assert";

import * as app from "../src/app";

describe("app", function () {
  it("pipeline", async function () {
    console.log("calling pipeline with input_text", "test_string");
    await runner.createRunner({}).run((root) => {
      const result = root.apply(app.createPipeline("test_string"));
      result.apply(testing.assertDeepEqual(["test_string", "Hello", "World!"]));
    });
  });
});
