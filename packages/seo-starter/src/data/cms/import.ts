import fs from "node:fs";
import path from "node:path";
import { RawState } from "../csv/types";

export function importDb() {
  const dbFilePath = path.resolve(process.cwd(), `src/data/db/states-all.json`);

  const data = fs.readFileSync(dbFilePath, "utf-8");

  return JSON.parse(data) as RawState[];
}
