import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { webSocket } from 'rxjs/webSocket';


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

  private connect(url): Subject<any> {
    return webSocket(url);
  }

  public eventObserver(): Observable<Event> {
    if (this.eventSubject === undefined) {
      this.eventSubject = <Subject<Event>>this
        .connect('ws://[SOME_WEBSOCKET]/ws/events'); // TODO: Get from config
    }

    return this.eventSubject;
  }

  send(msg) {
    this.eventSubject.next(msg);
  }
}
