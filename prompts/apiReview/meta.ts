import type { PromptDefinition } from "../../src/types/prompt.js";

export const apiReview: PromptDefinition = {
  id: "apiReview",
  name: "API Review",
  description:
    "Reviews an API spec (Swagger/OpenAPI, Postman collection, or endpoint documentation) from a Senior QE perspective — evaluates completeness, contract consistency, security, and testability, then issues a structured go/no-go recommendation.",
  tags: ["qa", "api", "contract-testing", "test-design"],
  model: "claude-sonnet-5",
  maxTokens: 4096,
  templatePath: "prompts/apiReview/prompt.md",
  variables: [
    {
      name: "api_spec",
      description:
        "The Swagger/OpenAPI spec, Postman collection, endpoint documentation, or raw API description to review.",
      required: true,
    },
  ],
};
