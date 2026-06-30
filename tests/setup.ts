import { vi } from 'vitest';

// Mock crypto.randomUUID
if (!globalThis.crypto?.randomUUID) {
  Object.defineProperty(globalThis, 'crypto', {
    value: { randomUUID: () => 'test-uuid-1234-5678-abcdefghijkl' },
    writable: true,
    configurable: true,
  });
}

// Mock fetch for tests that don't need it
globalThis.fetch = vi.fn();
