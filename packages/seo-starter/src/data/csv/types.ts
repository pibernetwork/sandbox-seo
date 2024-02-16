export interface CSVCapital {
  Name: string;
  Slug: string;
  Art1capital: string;
  Art2capital: string;
  Estado: string;
  UF: string;
}

export interface NormalizeCapital {
  name: string;
  slug: string;
  art1: string;
  art2: string;
  state: string;
  uf: string;
}

export interface CSVCity {
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

export interface NormalizeCity {
  name: string;
  slug: string;
  art1: string;
  art2: string;
  city: string;
  capital: string;
  uf: string;
  state: string;
}

export interface CSVUf {
  Name: string;
  Slug: string;
  Art1uf: string;
  Art2uf: string;
  Capital: string;
  Estado: string;
}

export interface NormalizeUf {
  name: string;
  slug: string;
  state: string;
  art1: string;
  art2: string;
  capital: string;
}

export interface CSVState {
  Name: string;
  Slug: string;
  Art1uf: string;
  Art2uf: string;
  Capital: string;
  UF: string;
}

export interface NormalizeState {
  name: string;
  slug: string;
  art1: string;
  art2: string;
  capital: string;
  uf: string;
}

export interface RawState {
  of: string;
  in: string;
  name: string;
  acronym: string;
  cities: RawCity[];
  capital: RawCity;
}

export interface RawCity {
  of: string;
  in: string;
  name: string;
}
