import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

const api = read("src/features/defects/api.ts");
const layout = read("src/app/layout.tsx");
const mockData = read("src/features/defects/mock-data.ts");

assert.match(api, /ky\.create/);
assert.match(api, /NEXT_PUBLIC_API_URL/);
assert.match(api, /x-request-id/);
assert.match(api, /getJson/);
assert.match(api, /lots\/\$\{id\}\/defect-summary/);
assert.match(api, /review-queue/);
assert.match(api, /defect-trends\?groupBy=hour/);
assert.match(layout, /Dashboard/);
assert.match(layout, /Review Queue/);
assert.match(layout, /Performance Lab/);
assert.match(mockData, /shipping_hold/);

console.log("defectrail-fe contract tests passed");
