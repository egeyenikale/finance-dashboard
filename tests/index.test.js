import assert from "node:assert/strict";
import { test } from "node:test";
import { project, summarizeProject } from "../src/index.js";

test("Finance Dashboard exposes project metadata", () => {
  assert.equal(project.slug, "finance-dashboard");
  assert.ok(project.features.length >= 3);
  assert.match(summarizeProject(), /planned features/);
});
