import { CMSCityItem, CMSStateItem } from "@/data/cms/types";

export default function CityPage({
  city,
  state,
}: {
  city: CMSCityItem;
  state: CMSStateItem;
}) {
  return (
    <div>
      City {state.state} - {city.city}
    </div>
  );
}
