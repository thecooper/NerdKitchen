import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';

import { ShoppingListComponent } from './shopping-list/shopping-list.component'
import { ListManagerComponent } from './list-manager/list-manager.component'

@NgModule({
	imports:		[ BrowserModule ],
	exports:		[ ShoppingListComponent, ListManagerComponent ],
	declarations: 	[ ShoppingListComponent, ListManagerComponent ],
})
export class ShoppingListModule {}