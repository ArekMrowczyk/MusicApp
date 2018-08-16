import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { MylibraryComponent } from './mylibrary/mylibrary.component';

const routes: Routes = [
  { path:'home' , loadChildren: './home/home.module#HomeModule'},
  { path:'mylibrary' , component: MylibraryComponent},
  { path:'playlists' , loadChildren: './playlists/playlists.module#PlaylistsModule'},
  { path:'search' , component: SearchComponent},

  { path:'' , redirectTo: 'home', pathMatch: 'full'},
  { path:'**' , redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
