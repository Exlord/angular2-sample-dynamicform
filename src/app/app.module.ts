import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule}    from '@angular/http';
import {FormsModule, ReactiveFormsModule}   from '@angular/forms';

import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService}  from './in-memory-data.service';

import {AppRouteModule} from './app-route';

import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {FieldComponent} from './field/field.component';
import {FormComponent} from './form/form.component';
import {FieldService} from './field/field.service';
import {FieldFormComponent} from './field/field-form/field-form.component';
import {FormFieldComponent} from './form/form-field/form-field.component';
import {FieldTextComponent} from './form/form-field/fields/field-text/field-text.component';
import {FormService} from './form/form.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FieldComponent,
    FormComponent,
    FieldFormComponent,
    FormFieldComponent,
    FieldTextComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRouteModule,

  ],
  providers: [FieldService, FormService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
