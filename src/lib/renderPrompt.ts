import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import type { PromptDefinition } from "../types/prompt.js";

const REPO_ROOT = resolve(import.meta.dirname, "..", "..");

export function loadTemplate(def: PromptDefinition): string {
  return readFileSync(resolve(REPO_ROOT, def.templatePath), "utf-8");
}

export function renderPrompt(
  def: PromptDefinition,
  values: Record<string, string>
): string {
  const template = loadTemplate(def);

  return template.replace(/\{\{(\w+)\}\}/g, (_match, name: string) => {
    if (name in values) return values[name];

    const variable = def.variables.find((v) => v.name === name);
    if (variable?.default !== undefined) return variable.default;
    if (variable && !variable.required) return "";

    throw new Error(
      `Missing value for "{{${name}}}" in prompt "${def.id}"`
    );
  });
}
