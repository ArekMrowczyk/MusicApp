import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PlaylistsComponent } from './playlists.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'playlists' , component: PlaylistsComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    PlaylistsComponent
  ]
})
export class PlaylistsModule { }
