#!/usr/bin/env node

require("dotenv").config();

// @ts-ignore
import R from "ramda";
// @ts-ignore
import got from "got";

const CODEBUILD_URL_BASE = "https://console.aws.amazon.com/codebuild/home";

async function main() {
  const url = R.defaultTo("", process.env.SLACK_WEBHOOK_URL);

  if (!url)
    throw new Error("Missing SLACK_WEBHOOK_URL environment variable.");

  const [project] = R.pipe(R.defaultTo(""), R.trim())(process.env.CODEBUILD_BUILD_ID).split(":", 1);
  const link = `${CODEBUILD_URL_BASE}?region=${process.env.AWS_REGION}#/builds/${process.env.CODEBUILD_BUILD_ID}/view/new`;
  const success = R.defaultTo("", process.env.CODEBUILD_BUILD_SUCCEEDING) === "1";
  const notify_on_fail = !!process.env.CODEBUILD_NOTIFY_ONLY_IF_FAIL;
  if (!notify_on_fail || (notify_on_fail && !success)){
    await got(url, {
      method: "POST",
      body: JSON.stringify({
        attachments: [
          {
            fallback: success ? "Build success!" : "Build failure.",
            title: `[${project}] ${success ? "Succeeded" : "Failed"} building branch ${process.env.CODEBUILD_WEBHOOK_HEAD_REF}`,
            title_link: link,
            color: success ? "good" : "danger",
          },
        ],
      }),
    });
  }
}

main().catch(err => console.log(`${err.message || err}`));
