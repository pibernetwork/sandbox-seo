export interface CMSKeywordItem {
  name: string;
  slug: string;
}

export interface CMSCityItem {
  slug: string;
  city: string;
  in: string;
  of: string;
  stateName: string;
  stateSlugName: string;
  stateAcronym: string;
  stateSlugAcronym: string;
  stateIn: string;
  stateOf: string;
}

export interface CMSStateItem {
  slug: string;
  state: string;
  in: string;
  of: string;
  acronym: string;
}
