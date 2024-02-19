import Banner from '@/components/Banner';
import { CMSCityItem, CMSStateItem } from '@/data/cms/types';

export default function CityPage({
  city,
  state,
}: {
  city: CMSCityItem;
  state: CMSStateItem;
}) {
  return (
    <>
      <Banner
        title={`Palavra chave ${city.in} ${city.city} - ${city.stateAcronym}`}
        description={`A melhor palavra chave ${city.of} ${city.city}`}
      />
      <p>
        Um texto simples pra mostrar a importância da palavra chave {city.in}{' '}
        {city.city}
      </p>

      <div>
        <h2>
          Outras cidades com palavra chave {city.stateIn} {city.stateName}
        </h2>
      </div>
    </>
  );
}
