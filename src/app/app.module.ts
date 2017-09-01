import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule } from '@angular/material';

import { AppComponent } from './app.component';
import { UserService } from './services/user-service.service';
import { ClubService } from './services/club-service.service';
import { UserlistComponent } from './admin/userlist/userlist.component';
import { ClublistComponent } from './admin/clublist/clublist.component';
import { SchedulerService } from './services/scheduler.service';
import { SlotViewComponent } from './admin/slot-view/slot-view.component';

@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    ClublistComponent,
    SlotViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule
  ],
  providers: [UserService, ClubService, SchedulerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
