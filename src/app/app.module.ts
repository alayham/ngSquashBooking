import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule, MdDialogModule, MdInputModule, MdListModule, MdTabsModule } from '@angular/material';

import { AppComponent } from './app.component';
import { UserService } from './services/user-service.service';
import { ClubService } from './services/club-service.service';
import { UserlistComponent } from './admin/userlist/userlist.component';
import { ClublistComponent } from './ui/clublist/clublist.component';
import { SchedulerService } from './services/scheduler.service';
import { SlotViewComponent } from './admin/slot-view/slot-view.component';
import { MenuComponent } from './ui/menu/menu.component';
import { RouterModule }   from '@angular/router';
import { ClubComponent } from './ui/club/club.component';
import { ReservationsService } from './services/reservations.service';
import { ReservationListComponent } from './admin/reservation-list/reservation-list.component';
import { TimeslotComponent } from './ui/timeslot/timeslot.component';
import { LoginDialogComponent } from './ui/login-dialog/login-dialog.component';
import { FormsModule } from '@angular/forms';
import { ReserveDialogComponent } from './ui/reserve-dialog/reserve-dialog.component';
import { UnreserveDialogComponent } from './ui/unreserve-dialog/unreserve-dialog.component';
import { ReservationComponent } from './ui/reservation/reservation.component';
import { CourtCalendarComponent } from './ui/court-calendar/court-calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    ClublistComponent,
    SlotViewComponent,
    MenuComponent,
    ClubComponent,
    ReservationListComponent,
    TimeslotComponent,
    LoginDialogComponent,
    ReserveDialogComponent,
    UnreserveDialogComponent,
    ReservationComponent,
    CourtCalendarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdDialogModule,
    MdInputModule,
    MdListModule,
    MdTabsModule,
    FormsModule,

    RouterModule.forRoot([
      { path: 'club', component: ClublistComponent },
      { path: 'club/:id' , component: ClubComponent },
      { path: '', redirectTo: 'club' , pathMatch: 'full' },
    ]),
  ],

  entryComponents: [
    LoginDialogComponent, ReserveDialogComponent,UnreserveDialogComponent
  ],
  
  providers: [UserService, ClubService, SchedulerService, ReservationsService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
