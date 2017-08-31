import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserServiceService } from './services/user-service.service';
import { ClubServiceService } from './services/club-service.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [UserServiceService, ClubServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
