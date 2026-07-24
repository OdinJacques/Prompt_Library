import type { PromptDefinition } from "../../src/types/prompt.js";

export const testCaseDesign: PromptDefinition = {
  id: "testCaseDesign",
  name: "Test Case Design",
  description:
    "Generates 20 structured test cases (5 each of Happy Path, Negative, Edge Case, and Regression) from a raw work item or from itemReview's output.",
  tags: ["qa", "test-design", "agile"],
  model: "claude-sonnet-5",
  maxTokens: 4096,
  templatePath: "prompts/testCaseDesign/prompt.md",
  variables: [
    {
      name: "work_item",
      description:
        "Either the raw work item (title, description, acceptance criteria) or the full output of the itemReview prompt.",
      required: true,
    },
  ],
};
