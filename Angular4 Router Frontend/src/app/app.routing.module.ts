import {CreateBikeComponent} from './createbike/createbike.component';
import {DetailsbikeComponent} from './detailsbike/detailsbike.component';
import { GetmodelComponent} from './getmodel/getmodel.component';

 
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
 
const routes: Routes = [
  {path: '', redirectTo: 'createBike', pathMatch: 'full'},
  {path: 'createBike', component: CreateBikeComponent},
  {path: 'getBikes', component:DetailsbikeComponent},
  {path:'getBike', component:GetmodelComponent}
  

];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
 
export class AppRoutingModule {}