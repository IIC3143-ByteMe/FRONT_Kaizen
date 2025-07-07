import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util';

// @ts-expect-error globalThis might not have TextEncoder in Node test environment
if (!globalThis.TextEncoder) {
  globalThis.TextEncoder = TextEncoder as unknown as typeof globalThis.TextEncoder;
}

// @ts-expect-error globalThis might not have TextDecoder in Node test environment
if (!globalThis.TextDecoder) {
  globalThis.TextDecoder = TextDecoder as unknown as typeof globalThis.TextDecoder;
}
