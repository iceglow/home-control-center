import {InjectionToken} from '@angular/core';
import {Observable} from 'rxjs';

export class DashboardCard {
  static metadata: any = {
    NAME: new InjectionToken<string>('name'),
    ROUTERLINK: new InjectionToken<string>('routerLink'),
    ICONCLASS: new InjectionToken<string>('iconClass'),
    COLS: new InjectionToken<Observable<number>>('cols'),
    ROWS: new InjectionToken<Observable<number>>('rows'),
    COLOR: new InjectionToken<string>('color')
  };

  constructor(private _input: {
    name: {
      key: InjectionToken<string>,
      value: string
    },
    routerLink: {
      key: InjectionToken<string>,
      value: string
    },
    iconClass: {
      key: InjectionToken<string>,
      value: string
    },
    cols: {
      key: InjectionToken<Observable<number>>,
      value: Observable<number>
    },
    rows: {
      key: InjectionToken<Observable<number>>,
      value: Observable<number>
    },
    color: {
      key: InjectionToken<string>,
      value: string
    }
  }, private _component: any, private _data: any = undefined) {
  }

  get input(): {
    name: {
      key: InjectionToken<string>;
      value: string
    };
    routerLink: {
      key: InjectionToken<string>;
      value: string
    };
    iconClass: {
      key: InjectionToken<string>;
      value: string
    };
    cols: {
      key: InjectionToken<Observable<number>>;
      value: Observable<number>
    };
    rows: {
      key: InjectionToken<Observable<number>>;
      value: Observable<number>
    };
    color: {
      key: InjectionToken<string>;
      value: string
    }
  } {
    return this._input;
  }

  get component(): any {
    return this._component;
  }

  get data(): any {
    return this._data || undefined;
  }
}
