const yargs = require("yargs");

import * as app from "./app";

async function main(argv) {
  await app.runPipeline(argv);
}

main(yargs.argv)
  .catch((e) => console.error(e))
  .finally(() => process.exit());
