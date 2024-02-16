import csvToJson from "csvtojson";
import path from "node:path";

export async function importFile<T>(csvName: string): Promise<T> {
  const csvFilePath = path.resolve(
    process.cwd(),
    `src/data/csv/files/${csvName}`
  );

  return (await csvToJson().fromFile(csvFilePath)) as T;
}
