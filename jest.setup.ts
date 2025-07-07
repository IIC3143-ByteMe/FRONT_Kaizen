import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util';
// @ts-ignore
if (!globalThis.TextEncoder) {
  globalThis.TextEncoder = TextEncoder as unknown as typeof globalThis.TextEncoder;
}
// @ts-ignore
if (!globalThis.TextDecoder) {
  globalThis.TextDecoder = TextDecoder as unknown as typeof globalThis.TextDecoder;
}
