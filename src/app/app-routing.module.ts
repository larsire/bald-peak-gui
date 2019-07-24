import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestPageComponent } from './playground/test-page/test-page.component';
import { ChildWithParamComponent } from './playground/test-page/child-with-param/child-with-param.component';
import { ChildWithNoParamComponent } from './playground/test-page/child-with-no-param/child-with-no-param.component';
import { HomeComponent } from './home/home.component';
import { CreaturePanelComponent } from './creature-panel/creature-panel.component';
import { PlaygroundComponent } from './playground/playground.component';
import { AnimationsComponent } from './playground/animations/animations.component';
import { FormComponent } from './playground/form/form.component';
import { NotesComponent } from './notes/notes.component';
import { AboutComponent } from './about/about.component';
import { NotesDetailsComponent } from './notes/notes-details/notes-details.component';
import { NotesListComponent } from './notes/notes-list/notes-list.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { animation: 'slideIn' }  },
  { path: 'notes', component: NotesComponent, data: { animation: 'slideIn' }, children: [
    { path: '', component: NotesListComponent, data: {animation: 'fadein'}},
    { path: ':id/details', component: NotesDetailsComponent, data: { animation: 'fadeIn'} }
  ]},
  { path: 'about', component: AboutComponent, data: { animation: 'slideIn' }  },
  { path: 'simulation', component: CreaturePanelComponent, data: { animation: 'slideIn' }  },
  { path: 'playground', component: PlaygroundComponent, data: { animation: 'slideIn' }, children: [
    { path: 'animations', component: AnimationsComponent, data: { animation: 'fadeIn'}},
    { path: 'test', component: TestPageComponent, data: { animation: 'fadeIn' }, children: [
        {
          path: '',
          component: ChildWithNoParamComponent
        },
        {
          path: ':id',
          component: ChildWithParamComponent
        }
      ]},
    { path: 'forms', component: FormComponent }
  ]},
  { path: '**',   redirectTo: '/home', pathMatch: 'full', data: { animation: 'slideIn' }  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
