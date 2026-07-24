export interface PromptVariable {
  name: string;
  description: string;
  required: boolean;
  default?: string;
}

export interface PromptDefinition {
  id: string;
  name: string;
  description: string;
  tags: string[];
  model: string;
  maxTokens: number;
  /** Path to the .md template, relative to the repo root. */
  templatePath: string;
  variables: PromptVariable[];
}
