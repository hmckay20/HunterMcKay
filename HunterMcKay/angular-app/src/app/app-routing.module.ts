import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PicturesPageComponent } from './pictures-page/pictures-page.component';  // Replace with the actual path of your component
import { HomeComponentComponent } from './home-component/home-component.component';
import { KariSydneyPageComponent } from './kari-sydney-page/kari-sydney-page.component';
import { DhavalSandeepPageComponent } from './dhaval-sandeep-page/dhaval-sandeep-page.component';
const routes: Routes = [
  { path: 'home', component: HomeComponentComponent },
  { path: 'pictures', component: PicturesPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'kari-sydney', component: KariSydneyPageComponent },
  { path: 'dhaval-sandeep', component: DhavalSandeepPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
