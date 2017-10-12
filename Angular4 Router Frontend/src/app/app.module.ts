import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app.routing.module';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { CreateBikeComponent } from './createbike/createbike.component';
import { BikeService } from './bike.service';
import { HttpModule } from '@angular/http';
import { DetailsbikeComponent } from './detailsbike/detailsbike.component';
import { BikedeleteComponent } from './bikedelete/bikedelete.component';
import { GetmodelComponent } from './getmodel/getmodel.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateBikeComponent,
    DetailsbikeComponent,
    BikedeleteComponent,
    GetmodelComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [BikeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
