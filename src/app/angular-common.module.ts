import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { 
  MatIconModule,
  MatSelectModule,
  MatOptionModule,
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatExpansionModule,
} from '@angular/material'

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule,
    MatSelectModule,
    MatOptionModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
  ],
  exports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule,
    MatSelectModule,
    MatOptionModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
  ],
  declarations: []
})
export class AngularCommonModule { }
