import { City, Uf } from "@/data/csv/types";

export default function CityPage({ city, state }: { city: City; state: Uf }) {
  return (
    <div>
      City {state.name} - {city.name}
    </div>
  );
}
