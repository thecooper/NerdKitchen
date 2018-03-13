import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router'
import { 
  MatToolbarModule,
  MatButtonModule
 } from '@angular/material'

import { AppComponent } from './app.component'

import { ServicesModule } from './services/services.module'
import { FeaturesModule } from './features/features.module';
import { HomeComponent } from './home/home.component';
import { NgMaterialModule } from './/ng-material.module'

let routes : Routes = [
  {
    path:"home",
    component: HomeComponent
  },
  {
    path:"*",
    redirectTo: "/home" 
  }
];

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule, 
    ServicesModule, 
    FeaturesModule,
    RouterModule.forRoot(routes),
    MatToolbarModule,
    MatButtonModule
  ],
  declarations: [ 
    AppComponent, HomeComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }