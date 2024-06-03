import { afterEach, describe, expect, it, vi } from "vitest";

// Subject
import index from "./index.js";

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

describe("Index", () => {
  it("Works", () => {
    expect(index).not.toBeUndefined();
    expect(index.extends).not.toBeUndefined();
    expect(index.rules).not.toBeUndefined();
  });
});
