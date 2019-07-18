import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import {RxWebsocketSubject} from './RxWebsocketSubject';

export interface EventHeader {
  ts: string;
  type: string;
  title: string;
}

export interface Event {
  header: EventHeader;
  payload: any;
}

@Injectable()
export class WebsocketService {

  private eventSubject: Subject<Event>;

  constructor() { }

  private connect(url): Subject<any> {
    return new RxWebsocketSubject(url);
  }

  public eventObserver(): Observable<Event> {
    if (this.eventSubject == undefined) {
      this.eventSubject = <Subject<Event>>this
        .connect('ws://[SOME_WEBSOCKET]/ws/events'); // TODO: Get from config
    }

    return this.eventSubject;
  }
}
