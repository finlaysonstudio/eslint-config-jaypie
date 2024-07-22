import { afterEach, describe, expect, it, vi } from "vitest";

// Subject
import flat from "./flat.mjs";

//
//
// Mock modules
//

afterEach(() => {
  vi.clearAllMocks();
});

//
//
// Run tests
//

describe("Flat", () => {
  it("Works", () => {
    expect(flat).not.toBeUndefined();
    expect(Array.isArray(flat)).toBe(true);
  });
});
