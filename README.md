# slack-codebuild

Send AWS CodeBuild status messages to Slack via an
[Incoming WebHook](https://slack.com/apps/A0F7XDUAZ-incoming-webhooks).

## Getting Started

This utility is designed to be used in an [AWS CodeBuild](https://console.aws.amazon.com/codebuild/home) project.

_Storing the `SLACK_WEBHOOK_URL` environment variable value in your
[AWS Systems Manager Parameter Store](https://console.aws.amazon.com/systems-manager/parameters) is strongly
recommended._

Example `buildspec.yml` file:
```yaml
env:
  parameter-store:
    SLACK_WEBHOOK_URL: MY_SYSTEMS_MANAGER_PARAMETER
    
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

### `AWS_REGION`

The AWS region where the build is running.

_This variable is automatically provided by CodeBuild._

### `CODEBUILD_BUILD_ID`

The AWS CodeBuild ID of the build.

_This variable is automatically provided by CodeBuild._

### `CODEBUILD_BUILD_SUCCEEDING`

Whether the current build is succeeding. Set to 0 if the build is failing, or 1 if the build is succeeding.

_This variable is automatically provided by CodeBuild._
