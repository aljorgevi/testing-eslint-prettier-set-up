// # name: Say Hello

// # on:
// #   push:
// #     branches:
// #       - main

// # jobs:
// #   hello_world:
// #     runs-on: ubuntu-18.04
// #     steps:
// #       - name: Echo the message
// #         run: echo "Hello World!"
// #       - name: tell me date
// #         run: date
// #       - run: ls -la
