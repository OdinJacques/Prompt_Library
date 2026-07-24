import type { PromptDefinition } from "./types/prompt.js";
import { itemReview } from "../prompts/itemReview/meta.js";
import { testCaseDesign } from "../prompts/testCaseDesign/meta.js";
import { apiReview } from "../prompts/apiReview/meta.js";
import { bugQualityReview } from "../prompts/bugQualityReview/meta.js";
import { automationCandidateReview } from "../prompts/automationCandidateReview/meta.js";
import { releaseReadinessReview } from "../prompts/releaseReadinessReview/meta.js";

export const prompts: PromptDefinition[] = [
  itemReview,
  testCaseDesign,
  apiReview,
  bugQualityReview,
  automationCandidateReview,
  releaseReadinessReview,
];

export function getPrompt(id: string): PromptDefinition {
  const found = prompts.find((p) => p.id === id);
  if (!found) throw new Error(`Unknown prompt id: "${id}"`);
  return found;
}
