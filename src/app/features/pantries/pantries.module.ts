import { NgModule } from '@angular/core'

import { PantryEditComponent } from './pantry-edit/pantry-edit.component'
import { PantriesComponent } from './pantries/pantries.component'

import { IngredientsModule } from '@app/features/ingredient/ingredients.module'
import { AngularCommonModule } from "@app/angular-common.module";

@NgModule({
  imports:      [ 
    AngularCommonModule,
    IngredientsModule
  ],
  declarations: [ 
    PantriesComponent, 
    PantryEditComponent 
  ],
  exports: 		[ 
    PantriesComponent, 
    PantryEditComponent 
  ]
})
export class PantriesModule { }
