import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccueilComponent} from "./accueil/accueil.component";
import {ContactComponent} from "./contact/contact.component";
import {LorraineComponent} from "./lorraine/lorraine.component";
import {AlsaceComponent} from "./alsace/alsace.component";

const routes: Routes = [
  {path: '', redirectTo: 'accueil', pathMatch: 'full'},
  {path:'accueil', component: AccueilComponent},
  {path:'lorraine', component: LorraineComponent},
  {path:'alsace', component: AlsaceComponent},
  {path:'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
