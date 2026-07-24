import type { PromptDefinition } from "../../src/types/prompt.js";

export const itemReview: PromptDefinition = {
  id: "itemReview",
  name: "Item Review",
  description:
    "Reviews an Agile work item (story, bug, task, or enhancement) from a Senior QA Engineer perspective — evaluates completeness, testability, and risk, then issues a structured go/no-go recommendation.",
  tags: ["qa", "agile", "refinement", "risk-assessment"],
  model: "claude-sonnet-5",
  maxTokens: 4096,
  templatePath: "prompts/itemReview/prompt.md",
  variables: [
    {
      name: "work_item",
      description:
        "The work item to review: plain text description, copied Jira content, or full details from a Jira URL (title, description, and acceptance criteria).",
      required: true,
    },
  ],
};
