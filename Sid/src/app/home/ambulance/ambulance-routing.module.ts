import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AmbulanceComponent } from './ambulance.component';

const routes: Routes = [
  {
    path: ':id',
    component: AmbulanceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AmbulanceRoutingModule {}
