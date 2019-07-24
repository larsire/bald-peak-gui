import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { registerLocaleData } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import localePL from '@angular/common/locales/pl';
import localePLExtra from '@angular/common/locales/extra/pl';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CreatureComponent } from './creature/creature.component';
import { CreaturePanelComponent } from './creature-panel/creature-panel.component';
import { TestPageComponent } from './playground/test-page/test-page.component';
import { HomeComponent } from './home/home.component';
import { TestPipePipe } from './test-pipe.pipe';
import { ChildWithParamComponent } from './playground/test-page/child-with-param/child-with-param.component';
import { ChildWithNoParamComponent } from './playground/test-page/child-with-no-param/child-with-no-param.component';
import { CreatureInventoryComponent } from './creature-inventory/creature-inventory.component';
import { PlaygroundComponent } from './playground/playground.component';
import { AnimationsComponent } from './playground/animations/animations.component';
import { FormComponent } from './playground/form/form.component';
import { NotesComponent } from './notes/notes.component';
import { AboutComponent } from './about/about.component';
import { NotesDetailsComponent } from './notes/notes-details/notes-details.component';
import { NotesListComponent } from './notes/notes-list/notes-list.component';

registerLocaleData(localePL, 'pl', localePLExtra);

@NgModule({
  declarations: [
    AppComponent,
    TestPageComponent,
    HomeComponent,
    TestPipePipe,
    ChildWithParamComponent,
    ChildWithNoParamComponent,
    NavigationComponent,
    CreatureComponent,
    CreaturePanelComponent,
    CreatureInventoryComponent,
    PlaygroundComponent,
    AnimationsComponent,
    FormComponent,
    NotesComponent,
    AboutComponent,
    NotesDetailsComponent,
    NotesListComponent,
  ],
  imports: [
    FormsModule,
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SocketIoModule.forRoot(config),
    HttpClientModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [HttpClient,
    { provide: LOCALE_ID, useValue: 'pl' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
