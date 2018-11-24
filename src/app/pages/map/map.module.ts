import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';

export const MapRoutes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Map',
      status: false
    },
    children: [
      {
        path: 'google',
        loadChildren: './google-map/google-map.module#GoogleMapModule'
      }, {
        path: 'vector',
        loadChildren: './vector/vector.module#VectorModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MapRoutes),
    SharedModule
  ],
  declarations: [MapComponent]
})
export class MapModule { }
