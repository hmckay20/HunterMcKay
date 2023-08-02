import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PicturesPageComponent } from './pictures-page/pictures-page.component';  // Replace with the actual path of your component
import { HomeComponentComponent } from './home-component/home-component.component';
const routes: Routes = [
  { path: 'home', component: HomeComponentComponent },
  { path: 'pictures', component: PicturesPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
