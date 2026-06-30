import { describe, it, expect } from 'vitest';
import { WORKFLOW, NODE_PROMPT, NODE_LATENT, NODE_SEED } from '../../src/data/workflows.js';

describe('WORKFLOW', () => {
  it('has NODE_PROMPT, NODE_LATENT, NODE_SEED', () => {
    expect(NODE_PROMPT).toBe('51');
    expect(NODE_LATENT).toBe('71');
    expect(NODE_SEED).toBe('53');
  });

  it('WORKFLOW is a non-empty object', () => {
    expect(typeof WORKFLOW).toBe('object');
    expect(Object.keys(WORKFLOW).length).toBeGreaterThan(0);
  });

  it('each node has inputs and class_type', () => {
    Object.values(WORKFLOW).forEach(node => {
      expect(typeof node.inputs).toBe('object');
      expect(typeof node.class_type).toBe('string');
    });
  });

  it('NODE_PROMPT node has text input', () => {
    const node = WORKFLOW[NODE_PROMPT];
    expect(node.inputs.text).toBeDefined();
  });
});
