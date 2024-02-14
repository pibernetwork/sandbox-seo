import csvToJson from "csvtojson";
import path from "node:path";
import { CSVCapital, CSVCity, CSVState, Capital, City, State } from "./types";

// Capitals
async function importCapitals(): Promise<CSVCapital[]> {
  const csvFilePath = path.resolve(
    process.cwd(),
    "src/data/csv/files/CMS-Capitais.csv"
  );

  return await csvToJson().fromFile(csvFilePath);
}

function normalizeCapitals(rawCapitals: CSVCapital[]): Capital[] {
  return rawCapitals.map((item) => {
    return {
      name: item.Name,
      slug: item.Slug,
      art1: item.Art1capital,
      art2: item.Art2capital,
      state: item.Estado,
      uf: item.UF,
    } satisfies Capital;
  });
}

export async function getCapitals(): Promise<Capital[]> {
  const rawCapitals = await importCapitals();
  return normalizeCapitals(rawCapitals);
}

// States
async function importStates(): Promise<CSVState[]> {
  const csvFilePath = path.resolve(
    process.cwd(),
    "src/data/csv/files/CMS-UF.csv"
  );

  return await csvToJson().fromFile(csvFilePath);
}

function normalizeStates(rawStates: CSVState[]): State[] {
  return rawStates.map((state) => {
    return {
      name: state.Name,
      slug: state.Slug,
      art1: state.Art1uf,
      art2: state.Art2uf,
      state: state.Estado,
      capital: state.Capital,
    } satisfies State;
  });
}

export async function getStates(): Promise<State[]> {
  const rawStates = await importStates();
  return normalizeStates(rawStates);
}

export async function getStateBySlug(uf: string): Promise<State | null> {
  console.log(process.cwd());
  const states = await getStates();
  const state = states.find((state) => state.slug === uf);
  return state || null;
}

async function importCities(): Promise<CSVCity[]> {
  const csvFilePath = path.resolve(
    process.cwd(),
    "src/data/csv/files/CMS-Cidades.csv"
  );

  return await csvToJson().fromFile(csvFilePath);
}

function normalizeCities(rawCities: CSVCity[]): City[] {
  return rawCities.map((city) => {
    return {
      name: city.Name,
      slug: city.Slug,
      art1: city.Art1cidade,
      art2: city.Art2cidade,
      city: city.Cidade,
      capital: city.Capital,
      uf: city.Uf,
      state: city.Estado,
    } satisfies City;
  });
}

export async function getCities() {
  const rawCities = await importCities();
  return normalizeCities(rawCities);
}
