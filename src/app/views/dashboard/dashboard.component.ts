import {Component, OnDestroy, OnInit} from '@angular/core';
import {DashboardCard} from '../../dashboard-card';
import { Observable } from 'rxjs';
import {DashboardCardsService} from '../../dashboard-cards.service';
import {MediaObserver} from '@angular/flex-layout';
import { map, startWith } from 'rxjs/operators';
import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import {BlankComponent} from '../../cards/blank/blank.component';
import {ClockComponent} from '../../cards/clock/clock.component';


import {
  faTh
} from '@fortawesome/free-solid-svg-icons';

const VIEWS = {
  DASHBOARD: 'dashboard',
  CALENDAR: 'calendar',
  MAP: 'map',
  FLOORPLAN: 'floorplan'
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  entryComponents: [
    BlankComponent,
    ClockComponent
  ]
})
export class DashboardComponent implements OnInit, OnDestroy {

  cards: DashboardCard[] = [];
  cols: Observable<number>;
  cols_big: Observable<number>;
  cols_med: Observable<number>;
  cols_sml: Observable<number>;

  iconDashboard = faTh;

  contentView = 'dashboard';

  private idleSecs = 1800;
  private idleTimeout = 10;

  constructor(private idle: Idle,
              private cardsService: DashboardCardsService,
              private mediaObserver: MediaObserver) {

    this.idle.setIdle(this.idleSecs);
    this.idle.setTimeout(this.idleTimeout);
    this.idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

    idle.onIdleEnd.subscribe(() => {});

    idle.onTimeout.subscribe(() => {
      location.reload();
    });

    idle.onIdleStart.subscribe(() => {});

    idle.onTimeoutWarning.subscribe((countdown) => {
      console.log('Been idling for ' + this.idleSecs + ' seconds. Reloads page in ' + countdown + ' sec.');
    });

    this.reset();

    this.cardsService.cards.subscribe(cards => {
      this.cards = cards;
    });
  }

  ngOnInit() {
    /* Grid column map */
    const cols_map = new Map([
      ['xs', 4],
      ['sm', 8],
      ['md', 12],
      ['lg', 16],
      ['xl', 20]
    ]);
    /* Big card column span map */
    const cols_map_big = new Map([
      ['xs', 1],
      ['sm', 2],
      ['md', 4],
      ['lg', 4],
      ['xl', 4]
    ]);
    /* Big card column span map */
    const cols_map_med = new Map([
      ['xs', 1],
      ['sm', 2],
      ['md', 2],
      ['lg', 2],
      ['xl', 2]
    ]);
    /* Small card column span map */
    const cols_map_sml = new Map([
      ['xs', 1],
      ['sm', 1],
      ['md', 1],
      ['lg', 1],
      ['xl', 1]
    ]);
    let start_cols: number;
    let start_cols_big: number;
    let start_cols_sml: number;
    cols_map.forEach((cols, mqAlias) => {
      if (this.mediaObserver.isActive(mqAlias)) {
        start_cols = cols;
      }
    });
    cols_map_big.forEach((cols_big, mqAlias) => {
      if (this.mediaObserver.isActive(mqAlias)) {
        start_cols_big = cols_big;
      }
    });
    cols_map_sml.forEach((cols_sml, mqAliast) => {
      if (this.mediaObserver.isActive(mqAliast)) {
        start_cols_sml = cols_sml;
      }
    });
    cols_map_med.forEach((cols_sml, mqAliast) => {
      if (this.mediaObserver.isActive(mqAliast)) {
        start_cols_sml = cols_sml;
      }
    });
    this.cols = this.mediaObserver.media$.pipe(
      map(change => {
        return cols_map.get(change.mqAlias);
      }), startWith(start_cols));
    this.cols_big = this.mediaObserver.media$.pipe(
      map(change => {
        return cols_map_big.get(change.mqAlias);
      }), startWith(start_cols_big));
    this.cols_med = this.mediaObserver.media$.pipe(
      map(change => {
        return cols_map_med.get(change.mqAlias);
      }), startWith(start_cols_sml));
    this.cols_sml = this.mediaObserver.media$.pipe(
      map(change => {
        return cols_map_sml.get(change.mqAlias);
      }), startWith(start_cols_sml));
    this.createCards();
  }

  ngOnDestroy() {
    this.idle.stop();
  }

  reset() {
    this.idle.watch();
  }

  changeView(view = VIEWS.DASHBOARD): void {
    if (view === this.contentView) {
      this.contentView = VIEWS.DASHBOARD;
    } else {
      this.contentView = view;
    }
  }

  cardsWithIcon(): DashboardCard[] {
    return this.cards.filter( card => card.input.iconClass !== undefined);
  }

  createCards(): void {

    this.cardsService.addCard(
      new DashboardCard(
        {
          name: {
            key: DashboardCard.metadata.NAME,
            value: 'blank'
          },
          routerLink: {
            key: DashboardCard.metadata.ROUTERLINK,
            value: '/dashboard/blank'
          },
          iconClass: undefined,
          cols: {
            key: DashboardCard.metadata.COLS,
            value: this.cols_big
          },
          rows: {
            key: DashboardCard.metadata.ROWS,
            value: this.cols_sml
          },
          color: {
            key: DashboardCard.metadata.COLOR,
            value: 'blue'
          }
        }, ClockComponent
      )
    );
  }
}
