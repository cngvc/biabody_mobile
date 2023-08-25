import React from 'react';

type AllowedProvider =
  | React.FC
  | React.ComponentClass<{children: React.ReactNode}>
  | React.ComponentType
  | React.ForwardRefExoticComponent<any>;
type FilteredOutProvider = false | undefined;

type ProviderList = Array<AllowedProvider | FilteredOutProvider>;

export const combine = (list: ProviderList, children: React.ReactNode) =>
  (list.filter(Boolean) as Array<AllowedProvider>).reduceRight(
    (acc, Provider) => <Provider>{acc}</Provider>,
    <>{children}</>,
  );
