import * as beam from "apache-beam";
import * as runner from "apache-beam/runners/runner";
import { requireForSerialization } from "apache-beam/serialization";

export function createPipeline(input_text) {
  // A pipeline is simply a callable that takes a root object.
  return (root: beam.Root) => {
    return root
      .apply(beam.create(["Hello", "World!", input_text]))
      .map(printAndReturn);
  };
}

export async function runPipeline(options) {
  // Here we create a runner based on the provide options, and use it
  // to run the above pipeline.
  await runner
    .createRunner(options)
    .run(createPipeline(options.input_text || "Default Input Text"));
}

function printAndReturn(element) {
  console.log(element);
  return element;
}

// Technically requireForSerialization is not required for printAndReturn
// (and it could have even been an anonymous function defined inline above)
// but we do this here as an example of how to register functions, classes,
// etc. that do not serialize nicely (including those referencing closures
// from third-party packages that are not compiled with the ts-closure-transform
// plugin).
// This causes the given module to be imported (required) on the beam worker
// which must (possibly indirectly) cause the line of code below to be executed
// on the worker as well.
requireForSerialization("apache-beam-starter-project/app", { printAndReturn });
