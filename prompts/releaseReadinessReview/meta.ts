import type { PromptDefinition } from "../../src/types/prompt.js";

export const releaseReadinessReview: PromptDefinition = {
  id: "releaseReadinessReview",
  name: "Release Readiness Review",
  description:
    "Acts as the final quality gate before a release — reviews test coverage, defects, deployment/rollback/monitoring readiness across one or more release documents, and issues an evidence-backed GO / CONDITIONAL GO / NO-GO recommendation.",
  tags: ["qa", "release", "risk-assessment", "agile"],
  model: "claude-sonnet-5",
  maxTokens: 4096,
  templatePath: "prompts/releaseReadinessReview/prompt.md",
  variables: [
    {
      name: "release_package",
      description:
        "One or more release documents to review: Jira release ticket, epic, sprint summary, release notes, test execution report, automation report, defect report, deployment plan, rollback plan, monitoring dashboard info, or production readiness checklist.",
      required: true,
    },
  ],
};
