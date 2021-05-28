import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ProductModule } from './product/product.module';
import { EmpModule } from './emp/emp.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    
    AppRoutingModule,
    ProductModule,
    EmpModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ name:'MyNgRxDemoApp', maxAge: 25, logOnly: environment.production })
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
