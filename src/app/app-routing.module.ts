import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TestPageComponent } from "./test-page/test-page.component";
import { ChildWithParamComponent } from "./test-page/child-with-param/child-with-param.component";
import { ChildWithNoParamComponent } from "./test-page/child-with-no-param/child-with-no-param.component";
import { HomeComponent } from "./home/home.component";


const routes: Routes = [
  { path: "test", component: TestPageComponent,
  children: [
    {
      path: "",
      component: ChildWithNoParamComponent
    },
    {
      path: ":id",
      component: ChildWithParamComponent
    }
  ]},
  { path: "home", component: HomeComponent },
  { path: "test2",   redirectTo: "/home", pathMatch: "full" },
  { path: "**",   redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
