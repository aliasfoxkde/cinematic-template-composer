// src/components/FieldGrid.ts
// Per-template placeholder fields: input + datalist select + dice button.
// Returns a picks map of { placeholder: selectedValue }.

import { VALUES } from '../data/index.js';

function rand<T>(a: T[]): T {
  return a[Math.floor(Math.random() * a.length)];
}

function valsFor(ph: string): string[] {
  return VALUES[ph] ?? VALUES.__generic__ ?? [];
}

export function mountFieldGrid(
  container: HTMLElement,
  placeholders: string[],
  initialPicks: Record<string, string>,
  onChange: (picks: Record<string, string>) => void,
) {
  container.innerHTML = '';
  const picks: Record<string, string> = { ...initialPicks };

  for (const ph of placeholders) {
    const wrap = document.createElement('div');
    wrap.className = 'field';

    const box = document.createElement('div');

    const lab = document.createElement('label');
    lab.textContent = ph.replace(/_/g, ' ');
    lab.htmlFor = `inp-${ph}`;
    box.appendChild(lab);

    const datalistId = `dl-${ph}`;
    const inp = document.createElement('input');
    inp.id = `inp-${ph}`;
    inp.placeholder = 'choose, type, or roll the dice';
    inp.dataset.ph = ph;
    inp.value = picks[ph] ?? '';
    inp.setAttribute('list', datalistId);
    box.appendChild(inp);

    const dl = document.createElement('datalist');
    dl.id = datalistId;
    valsFor(ph).forEach((v) => {
      const o = document.createElement('option');
      o.value = v;
      dl.appendChild(o);
    });
    box.appendChild(dl);

    const dice = document.createElement('button');
    dice.className = 'dice';
    dice.innerHTML = '&#127922;';
    dice.title = 'Randomize';
    dice.addEventListener('click', () => {
      const v = rand(valsFor(ph));
      inp.value = v;
      picks[ph] = v;
      onChange({ ...picks });
    });

    inp.addEventListener('input', () => {
      picks[ph] = inp.value;
      onChange({ ...picks });
    });

    wrap.appendChild(box);
    wrap.appendChild(dice);
    container.appendChild(wrap);
  }
}

export function buildPlaceholders(template: string): string[] {
  const seen = new Set<string>();
  const re = /\{([^}]+)\}/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(template)) !== null) seen.add(m[1]);
  return [...seen];
}
