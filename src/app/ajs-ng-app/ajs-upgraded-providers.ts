
export abstract class ajsLocation {
  [key: string]: string;
}

export function locationFactory(i: any) {
  return i.get('$location');
}

export const locationProvider = {
  provide: ajsLocation,
  useFactory: locationFactory,
  deps: ['$injector']
};
