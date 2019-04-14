import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { NavigationButtonComponent } from "./navigation/navigation-button/navigation-button.component";
import { LivingFormComponent } from "./living-form/living-form.component";
import { LivingFormPanelComponent } from "./living-form-panel/living-form-panel.component";
import { TestPageComponent } from "./test-page/test-page.component";
import { HomeComponent } from "./home/home.component";
import { TestPipePipe } from "./test-pipe.pipe";
import { ChildWithParamComponent } from "./test-page/child-with-param/child-with-param.component";
import { ChildWithNoParamComponent } from "./test-page/child-with-no-param/child-with-no-param.component";
import { PageWindowComponent } from './page-window/page-window.component';

@NgModule({
  declarations: [
    AppComponent,
    TestPageComponent,
    HomeComponent,
    TestPipePipe,
    ChildWithParamComponent,
    ChildWithNoParamComponent,
    NavigationComponent,
    NavigationButtonComponent,
    LivingFormComponent,
    LivingFormPanelComponent,
    PageWindowComponent,
  ],
  imports: [
    FormsModule,
    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
