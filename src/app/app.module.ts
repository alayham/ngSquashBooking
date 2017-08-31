import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserService } from './services/user-service.service';
import { ClubService } from './services/club-service.service';
import { UserlistComponent } from './admin/userlist/userlist.component';
import { ClublistComponent } from './admin/clublist/clublist.component';

@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    ClublistComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [UserService, ClubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
