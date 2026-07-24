# Prompt Library

A typed collection of prompts for use with the Claude API.

## Structure

Each prompt lives in its own folder under `prompts/`:

```
prompts/<prompt-id>/
  prompt.md   # the template text, with {{variable}} placeholders
  meta.ts     # typed metadata: id, model, variables, etc.
```

`src/types/prompt.ts` defines the `PromptDefinition` shape. `src/lib/renderPrompt.ts`
loads a prompt's `.md` template and substitutes `{{variable}}` placeholders with
provided values (falling back to each variable's `default`, if any).

`src/registry.ts` collects every prompt's metadata into one array and exposes
`getPrompt(id)` to look one up by id.

## Adding a new prompt

1. Create `prompts/<your-prompt-id>/prompt.md` with the template text.
2. Create `prompts/<your-prompt-id>/meta.ts` exporting a `PromptDefinition`
   (copy `prompts/itemReview/meta.ts` as a starting point).
3. Add it to the `prompts` array in `src/registry.ts`.

## Usage

```bash
npm install
npm run typecheck
```

```ts
import Anthropic from "@anthropic-ai/sdk";
import { getPrompt } from "./src/registry.js";
import { renderPrompt } from "./src/lib/renderPrompt.js";

const client = new Anthropic();
const prompt = getPrompt("itemReview");
const userMessage = renderPrompt(prompt, { work_item: "<pasted Jira content>" });

const response = await client.messages.create({
  model: prompt.model,
  max_tokens: prompt.maxTokens,
  messages: [{ role: "user", content: userMessage }],
});
```
