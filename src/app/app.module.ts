import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneratorComponent } from './generator/generator.component';
import { PaymentsComponent } from './payments/payments.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CellComponent } from './cell/cell.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GeneratorComponent,
    PaymentsComponent,
    CellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
