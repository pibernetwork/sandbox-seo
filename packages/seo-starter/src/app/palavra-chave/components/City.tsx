import { City, State } from "@/data/csv/types";

export default function CityPage({
  city,
  state,
}: {
  city: City;
  state: State;
}) {
  return (
    <div>
      City {state.name} - {city.name}
    </div>
  );
}
