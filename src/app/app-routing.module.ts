import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RoutingConstants} from "./app-routing.constants";
import { NgforissueComponent } from './ngforissue/ngforissue.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/' + RoutingConstants.LOGIN_URL,
    pathMatch: 'full'
  },
  {
    path: RoutingConstants.LOGIN_URL,
    component: NgforissueComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false, paramsInheritanceStrategy: 'always' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
