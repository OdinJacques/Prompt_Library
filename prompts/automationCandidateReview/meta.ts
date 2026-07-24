import type { PromptDefinition } from "../../src/types/prompt.js";

export const automationCandidateReview: PromptDefinition = {
  id: "automationCandidateReview",
  name: "Automation Candidate Review",
  description:
    "Analyzes a work item (story, epic, feature description, AC) from a Senior Automation QE perspective — decides whether it should be automated, at what test-pyramid level, and with what ROI/maintenance trade-offs.",
  tags: ["qa", "automation", "test-strategy", "agile"],
  model: "claude-sonnet-5",
  maxTokens: 4096,
  templatePath: "prompts/automationCandidateReview/prompt.md",
  variables: [
    {
      name: "work_item",
      description:
        "The work item to review: Jira story, epic, feature description, acceptance criteria, or technical notes.",
      required: true,
    },
  ],
};
