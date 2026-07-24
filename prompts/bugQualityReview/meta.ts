import type { PromptDefinition } from "../../src/types/prompt.js";

export const bugQualityReview: PromptDefinition = {
  id: "bugQualityReview",
  name: "Bug Quality Review",
  description:
    "Reviews a bug report (not the underlying code) from a Senior QE triage perspective — evaluates reproducibility, completeness, and evidence, then recommends severity, priority, and a go/no-go for development.",
  tags: ["qa", "bug-triage", "agile"],
  model: "claude-sonnet-5",
  maxTokens: 4096,
  templatePath: "prompts/bugQualityReview/prompt.md",
  variables: [
    {
      name: "bug_report",
      description:
        "The bug report to review: Jira bug, description, logs, screenshots/videos, or stack trace content.",
      required: true,
    },
  ],
};
