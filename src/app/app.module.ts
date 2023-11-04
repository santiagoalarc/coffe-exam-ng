import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CoffeeModule } from './coffee/coffee.module';


@NgModule({
  declarations: [	
    AppComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoffeeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
