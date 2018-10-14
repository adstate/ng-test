export abstract class RouteParams {
  [key: string]: string;
}

export function uiRouterFactory(i: any) {
  return i.get('ui.router');
}

export const uiRouterProvider = {
  provide: RouteParams,
  useFactory: uiRouterFactory,
  deps: ['$injector']
};
