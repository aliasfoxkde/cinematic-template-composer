// src/components/Header.ts
// Brand header with title and Prisma Packs attribution tag.

export function mountHeader(container: HTMLElement) {
  container.innerHTML = `
    <header>
      <span class="brand">
        <span class="b1">C</span><span class="b2">INEMATIC</span>
      </span>
      <span class="sub">Template Composer</span>
      <span class="tag">Prisma Packs</span>
    </header>
  `;
}
