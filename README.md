# slack-codebuild

Send AWS CodeBuild status messages to Slack via an
[Incoming WebHook](https://slack.com/apps/A0F7XDUAZ-incoming-webhooks).

## Getting Started

This utility is designed to be run as part of a CodeBuild project.

```yaml
phases:
  install:
    commands:
      - npm install -g slack-codebuild
  post_build:
    finally:
      - slack-codebuild
```

## Environment Variables

### `SLACK_WEBHOOK_URL`

The Incoming WebHook URL where messages will be posted
(e.g. `https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX`)

Set this variable in the advanced settings of your [CodeBuild](https://console.aws.amazon.com/codebuild/home) project.

### `AWS_REGION`

The AWS region where the build is running.

_This automatically variable is provided by CodeBuild._

### `CODEBUILD_BUILD_ID`

The AWS CodeBuild ID of the build.

_This automatically variable is provided by CodeBuild._

### `CODEBUILD_RESOLVED_SOURCE_VERSION`

For builds run by AWS CodePipeline, the commit ID or Amazon S3 version ID of the source code to be built. Note that
this value is available only if the pipeline's related Source action is based on an Amazon S3, AWS CodeCommit, or
GitHub repository.

_This automatically variable is provided by CodeBuild._

### `CODEBUILD_BUILD_SUCCEEDING`

Whether the current build is succeeding. Set to 0 if the build is failing, or 1 if the build is succeeding.

_This automatically variable is provided by CodeBuild._
