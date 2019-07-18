import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {DashboardCardSpawnerComponent} from './dashboard-card-spawner/dashboard-card-spawner.component';
import {DashboardCardsService} from '../../dashboard-cards.service';
import {FlexLayoutModule} from '@angular/flex-layout';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatGridListModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatTooltipModule,
  MatExpansionModule
} from '@angular/material';
import {WebsocketService} from '../../websocket.service';
import {AngularFittextModule} from 'angular-fittext';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { registerLocaleData } from '@angular/common';
import localeSv from '@angular/common/locales/sv';
import localeSvExtra from '@angular/common/locales/extra/sv';

@NgModule({
  imports: [
    CommonModule,
    MatGridListModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatTooltipModule,
    MatSidenavModule,
    MatExpansionModule,
    FlexLayoutModule,
    AngularFittextModule,
    FontAwesomeModule
  ],
  declarations: [
    DashboardComponent,
    DashboardCardSpawnerComponent
  ],
  exports: [DashboardComponent],
  providers: [
    DashboardCardsService,
    WebsocketService
  ]
})
export class DashboardModule { }

registerLocaleData(localeSv, 'sv-SV', localeSvExtra);
