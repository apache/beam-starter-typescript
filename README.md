# Apache Beam starter for Typescript

If you want to clone this repository to start your own project,
you can choose the license you prefer and feel free to delete anything related to the license you are dropping.

## Before you begin

Make sure you have a [Node.js](https://nodejs.org/) development environment installed.
If you don't, you can download and install it from the
[downloads page](https://nodejs.org/en/download/).

### Building the pipeline.

As a one time setup, when starting a fresh project, dependencies need to be installed.
This can be done with

```sh
npm install
```

The pipeline is then build with

```sh
npm run build
```

### Running the pipeline

Running your pipeline in Python is as easy as running the build script file directly.

```sh
# You can run the script file directly.
node dist/src/main.js

# To run passing command line arguments.
node dist/src/main.js --input_text="🎉"

# To run the tests.
npm test
```

## GitHub Actions automated testing

This project already comes with automated testing via [GitHub Actions](https://github.com/features/actions).

To configure it, look at the [`.github/workflows/test.yaml`](.github/workflows/test.yaml) file.

## Using other runners

To run this pipeline on another runner, simply set the `--runner` flag
(along with any other parameters it requires).
For example, to run on Flink you can execute the pipeline as

````sh
node dist/src/main.js --runner=flink [--flinkMaster=...]
``

or to run it on dataflow execute the pipeline as

```sh
node dist/src/main.js \
    --runner=dataflow \
    --project=[GCP_PROJECT] \
    --tempLocation='gs://bucket/temp' \
    --region=us-central1
````

Note that the first time this is run it may take a while to download
the required jars/environment, but this will be cached for later use.

## Contributing

Thank you for your interest in contributing!
All contributions are welcome! 🎉🎊

Please refer to the [`CONTRIBUTING.md`](CONTRIBUTING.md) file for more information.

# License

This software is distributed under the terms of both the MIT license and the
Apache License (Version 2.0).

See [LICENSE](LICENSE) for details.
