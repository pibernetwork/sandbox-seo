import Banner from '@/components/Banner';
import Section from '@/components/Section';
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

      <Section
        id="information"
        title={`Informação sobre palavra chave ${city.of} ${city.city} - ${city.stateAcronym}`}
      >
        <p>
          Um texto simples pra mostrar a importância da palavra chave {city.in}{' '}
          {city.city}. O povo {city.of} {city.city}, no estado {city.stateOf}{' '}
          <a
            href={`/palavra-chave/${city.stateSlugAcronym}`}
            className="underline text-blue-200"
          >
            {city.stateName}
          </a>
          , sabe o valor da{' '}
          <a href="/palavra-chave" className="underline text-blue-200">
            palavra chave
          </a>{' '}
          para o SEO.
        </p>
      </Section>
    </>
  );
}
