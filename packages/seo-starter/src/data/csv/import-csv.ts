import csvToJson from "csvtojson";
import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

interface CSVCapital {
  Name: string;
  Slug: string;
  Art1capital: string;
  Art2capital: string;
  Estado: string;
  UF: string;
}

interface CSVCity {
  Name: string;
  Slug: string;
  Art1cidade: string;
  Art2cidade: string;
  Cidade: string;
  Capital: string;
  Uf: string;
  Estado: string;
  destaque: string;
}

interface CSVState {
  Name: string;
  Slug: string;
  Art1uf: string;
  Art2uf: string;
  Capital: string;
  Estado: string;
}

export async function importCapitals(): Promise<CSVCapital[]> {
  const csvFilePath = path.resolve(__dirname, "files/CMS-Capitais.csv");

  return await csvToJson().fromFile(csvFilePath);
}

export async function importStates(): Promise<CSVState[]> {
  const csvFilePath = path.resolve(__dirname, "files/CMS-UF.csv");

  return await csvToJson().fromFile(csvFilePath);
}

export async function importCities(): Promise<CSVCity[]> {
  const csvFilePath = path.resolve(__dirname, "files/CMS-Cidades.csv");

  return await csvToJson().fromFile(csvFilePath);
}

async function importCSV() {
  const cities = await importCities();
  const states = await importStates();
  const capitals = await importCapitals();

  console.log(cities[0]);
  console.log(states[0]);
  console.log(capitals[0]);
}

importCSV();
