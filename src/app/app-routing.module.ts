import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent }  from './components/main-layout/main-layout.component';
import { DataTableComponent }   from './components/data-table/data-table.component';
import { AllTablesResolver }    from './core/resolves/all-tables.resolver';
import { TableResolver }        from './core/resolves/table.resolver';

const routes: Routes = [
  {
    path     : '',
    component: MainLayoutComponent,
    children : [
      {
        path     : 'home/:tableId',
        component: DataTableComponent,
        resolve  : {
          table: TableResolver
        }
      }
    ],
    resolve : {
      tables: AllTablesResolver
    }
  }
];

@NgModule({
  imports  : [RouterModule.forRoot(routes)],
  providers: [],
  exports  : [RouterModule]
})
export class AppRoutingModule {
}
