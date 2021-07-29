import { NgModule }            from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule }       from '@angular/platform-browser';

import { AppRoutingModule }        from './app-routing.module';
import { AppComponent }            from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainLayoutComponent }     from './components/main-layout/main-layout.component';
import { DataTableComponent }      from './components/data-table/data-table.component';
import { CoreModule }              from './core/core.module';
import { SharedModule }      from './shared/shared.module';
import { AddTableComponent } from './components/main-layout/dialogs/add-table/add-table.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    DataTableComponent,
    AddTableComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers   : [],
  bootstrap   : [AppComponent]
})
export class AppModule {
}
