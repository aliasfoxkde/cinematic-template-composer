// src/components/PromptPreview.ts
// Textarea that shows the filled prompt, with copy-to-clipboard.

export function mountPromptPreview(container: HTMLElement) {
  container.className = 'card preview';
  container.innerHTML = `
    <label>Composed prompt</label>
    <textarea id="out" spellcheck="false"></textarea>
  `;
}

export function renderPrompt(template: string, picks: Record<string, string>): string {
  let s = template;
  for (const [ph, v] of Object.entries(picks)) {
    const val = v?.trim();
    s = s.split(`{${ph}}`).join(val ?? `{${ph}}`);
  }
  return s;
}

export async function copyToClipboard(text: string, msgEl: HTMLElement): Promise<void> {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    ta.remove();
  }
  const orig = msgEl.textContent;
  msgEl.textContent = '✓ Copied!';
  msgEl.className = 'hint copied';
  setTimeout(() => {
    msgEl.textContent = orig;
    msgEl.className = 'hint';
  }, 1200);
}
