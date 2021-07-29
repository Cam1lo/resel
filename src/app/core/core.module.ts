import { NgModule }          from '@angular/core';
import { CommonModule }      from '@angular/common';
import { AllTablesResolver } from './resolves/all-tables.resolver';
import { TableResolver }     from './resolves/table.resolver';

@NgModule({
  declarations: [],
  providers   : [TableResolver, AllTablesResolver],
  imports     : [
    CommonModule
  ]
})
export class CoreModule {
}
