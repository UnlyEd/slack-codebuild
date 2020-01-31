<a href="https://unly.org"><img src="https://storage.googleapis.com/unly/images/ICON_UNLY.png" align="right" height="20" alt="Unly logo" title="Unly logo" /></a>
[![Known Vulnerabilities](https://snyk.io/test/github/UnlyEd/slack-codebuild/badge.svg?targetFile=package.json)](https://snyk.io/test/github/UnlyEd/slack-codebuild?targetFile=package.json)

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
    SLACK_WEBHOOK_URL: /CodeBuild/MyProject/SlackWebHookUrl
    CODEBUILD_NOTIFY_ONLY_IF_FAIL: 1
    
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

### `CODEBUILD_NOTIFY_ONLY_IF_FAIL`

Set to 0 if you want to be notify whatever, or 1 only on failure. Default set to 0

_This variable is automatically provided by CodeBuild._

# Vulnerability disclosure

[See our policy](https://github.com/UnlyEd/Unly).

---

# Contributors and maintainers

This project is being maintained by:
- [Unly] Ambroise Dhenain ([Vadorequest](https://github.com/vadorequest)) **(active)**
- [Contributor] Hugo Martin ([Demmonius](https://github.com/Demmonius)) **(active)**

---

# **[ABOUT UNLY]** <a href="https://unly.org"><img src="https://storage.googleapis.com/unly/images/ICON_UNLY.png" height="40" align="right" alt="Unly logo" title="Unly logo" /></a>

> [Unly](https://unly.org) is a socially responsible company, fighting inequality and facilitating access to higher education. 
> Unly is committed to making education more inclusive, through responsible funding for students. 
We provide technological solutions to help students find the necessary funding for their studies. 

We proudly participate in many TechForGood initiatives. To support and learn more about our actions to make education accessible, visit : 
- https://twitter.com/UnlyEd
- https://www.facebook.com/UnlyEd/
- https://www.linkedin.com/company/unly
- [Interested to work with us?](https://jobs.zenploy.io/unly/about)

Tech tips and tricks from our CTO on our [Medium page](https://medium.com/unly-org/tech/home)!

#TECHFORGOOD #EDUCATIONFORALL
