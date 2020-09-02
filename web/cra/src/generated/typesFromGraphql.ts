export type Maybe<T> = T | undefined;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  houses: Array<House>;
  people: Maybe<Array<Person>>;
};


export type QueryHousesArgs = {
  ids: Array<Scalars['Int']>;
};


export type QueryPeopleArgs = {
  ids: Array<Scalars['Int']>;
};

export type House = {
  __typename?: 'House';
  id: Scalars['Int'];
  squarefeet: Scalars['Int'];
  numberOfBedrooms: Scalars['Int'];
  onSale: Scalars['Boolean'];
  isRental: Maybe<Scalars['Boolean']>;
  Owner: Person;
  address: HouseAddress;
};

export type HouseAddress = {
  __typename?: 'HouseAddress';
  streetname: Maybe<Scalars['String']>;
  housenumber: Maybe<Scalars['String']>;
};

export type Person = {
  __typename?: 'Person';
  id: Scalars['Int'];
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  fullname: Scalars['String'];
  houses: Maybe<Array<Maybe<House>>>;
};

export type UserHouseQueryVariables = Exact<{
  ids: Array<Scalars['Int']>;
}>;


export type UserHouseQuery = { __typename?: 'Query', houses: Array<{ __typename?: 'House', id: number, squarefeet: number, Owner: { __typename?: 'Person', id: number, fullname: string } }> };
