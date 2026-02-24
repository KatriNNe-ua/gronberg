import "@testing-library/jest-dom";

import { beforeEach, vi } from "vitest";

beforeEach(() => {
  globalThis.fetch = vi.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ success: "true" }),
    } as Response),
  );
});

