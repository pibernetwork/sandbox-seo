import fs from "node:fs";
import path from "node:path";
import { getCapitals } from "../import/capitals.js";
import { getCities } from "../import/cities.js";
import { getStates } from "../import/state.js";
import { getUfs } from "../import/uf.js";
import { RawCity, RawState } from "../types.js";

async function generateRawDB() {
  const states = await getStates();
  const ufs = await getUfs();
  const cities = await getCities();
  const capitals = await getCapitals();

  const rawStates: RawState[] = [];

  for (const state of states) {
    const uf = ufs.find((ufState) => ufState.state === state.slug);
    if (!uf) {
      throw new Error(`Missing uf for ${state.name}`);
    }

    if (uf.art1 !== state.art1) {
      throw new Error(`Incongruent article in for ${state.name}`);
    }

    if (uf.art2 !== state.art2) {
      throw new Error(`Incongruent article of for ${state.name}`);
    }

    const partialRawState: Partial<RawState> = {
      name: state.name,
      acronym: uf.name,
      in: state.art1,
      of: state.art2,
    };

    const stateCities = cities.filter(
      (city) => city.uf === partialRawState.acronym?.toLocaleLowerCase()
    );

    console.warn(`${partialRawState.acronym} - ${stateCities.length}`);

    const stateCapital = capitals.find(
      (city) => city.uf === partialRawState.acronym?.toLocaleLowerCase()
    );

    if (!stateCapital) {
      throw new Error(`Missing state capital for ${partialRawState.acronym}`);
    }

    const rawCities: RawCity[] = [];

    for (const stateCity of stateCities) {
      rawCities.push({
        name: stateCity.city,
        in: stateCity.art1,
        of: stateCity.art2,
      });
    }

    rawCities.push({
      name: stateCapital.name,
      in: stateCapital.art1,
      of: stateCapital.art2,
    });

    rawCities.sort((a, b) => a.name.localeCompare(b.name));

    const rawState: RawState = {
      ...(partialRawState as RawState),
      cities: rawCities,
    };

    rawStates.push(rawState);
  }

  const dbFilePath = path.resolve(process.cwd(), `src/data/csv/files/db.json`);

  fs.writeFileSync(dbFilePath, JSON.stringify(rawStates));

  console.log("Done");
}

generateRawDB();
