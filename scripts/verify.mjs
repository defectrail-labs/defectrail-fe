import { existsSync, readFileSync } from "node:fs";

const required = [
  "src/app/dashboard/page.tsx",
  "src/app/lots/[id]/page.tsx",
  "src/app/review-queue/page.tsx",
  "src/app/performance-lab/page.tsx",
  "src/features/defects/api.ts",
];

for (const file of required) {
  if (!existsSync(file)) throw new Error(`missing ${file}`);
}

const api = readFileSync("src/features/defects/api.ts", "utf8");
if (!api.includes("ky.create")) throw new Error("ky client missing");
if (api.includes("graphql")) throw new Error("GraphQL is not allowed");

console.log("frontend contract ok");
