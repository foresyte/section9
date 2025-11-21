const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('child_process').exec;


function run() {

    core.notice('Hello from custom javascript action');
    console.log("Deploying to AWS S3...");
}

run();