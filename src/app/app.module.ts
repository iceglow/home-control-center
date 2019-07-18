import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgIdleModule } from '@ng-idle/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MomentModule } from 'ngx-moment';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { DashboardModule } from './views/dashboard/dashboard.module';
import { ClockComponent } from './cards/clock/clock.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OrderBy } from './orderBy';
import { GroupBy } from './groupBy';
import { GetWord } from './getWord';
import { BlankComponent } from './cards/blank/blank.component';
import {
  MatAutocompleteModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BlankComponent,
    ClockComponent,
    OrderBy,
    GroupBy,
    GetWord,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DashboardModule,
    NgIdleModule.forRoot(),
    NgxChartsModule,
    MatGridListModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatExpansionModule,
    MomentModule,
    FontAwesomeModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatBottomSheetModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
