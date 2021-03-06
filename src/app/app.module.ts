import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule, 
          MdDialogModule, MdInputModule, MdListModule, 
          MdSelectModule} from '@angular/material';

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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReserveDialogComponent } from './ui/reserve-dialog/reserve-dialog.component';
import { UnreserveDialogComponent } from './ui/unreserve-dialog/unreserve-dialog.component';
import { ReservationComponent } from './ui/reservation/reservation.component';
import { CourtCalendarComponent } from './ui/court-calendar/court-calendar.component';
import { UserProfileComponent } from './ui/user-profile/user-profile.component';
import { SearchComponent } from './ui/search/search.component';
import { DialogsService } from "app/services/dialogs/dialogs.service";

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
    CourtCalendarComponent,
    UserProfileComponent,
    SearchComponent
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
    MdSelectModule,
    ReactiveFormsModule,
    
    
    FormsModule,

    RouterModule.forRoot([
      { path: 'club', component: ClublistComponent },
      { path: 'club/:id' , component: ClubComponent },
      { path: 'club/:id/:cid' , component: ClubComponent },
      { path: 'user', component: UserProfileComponent },
      { path: 'search', component: SearchComponent },      
      { path: '', redirectTo: 'club' , pathMatch: 'full' },
      { path: '**', redirectTo: 'club' , pathMatch: 'full' },
    ]),
  ],

  entryComponents: [  // these dialogs are automatically created, they are shown on demand by the DialogsService
    LoginDialogComponent, 
    ReserveDialogComponent,
    UnreserveDialogComponent
  ],
  
  providers: [UserService, ClubService, SchedulerService, ReservationsService, DialogsService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
