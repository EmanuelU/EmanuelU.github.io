import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router'; 

import { HttpModule }    from '@angular/http';
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }        from './app.component';
import { SequencesComponent }     from './sequences.component';
import { BidComponent }     from './bid.component';
import { SuitComponent }     from './suit.component';
import { SequenceService }         from './sequence.service';

import { AppRoutingModule }     from './app-routing.module';
 
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    SequencesComponent,
    BidComponent,
    SuitComponent
  ],
  providers: [
    SequenceService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}