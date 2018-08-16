import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { MaterialModule } from './shared/material/material.module';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { BottomBarComponent } from './components/bottom-bar/bottom-bar.component';
import { HomeModule } from './home/home.module';
import { SearchComponent } from './search/search.component';
import { PlaylistsModule } from './playlists/playlists.module';
import { MylibraryComponent } from './mylibrary/mylibrary.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    BottomBarComponent,
    SearchComponent,
    MylibraryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    HomeModule,
    PlaylistsModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
