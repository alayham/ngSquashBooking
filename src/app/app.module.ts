import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserService } from './services/user-service.service';
import { ClubService } from './services/club-service.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [UserService, ClubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
