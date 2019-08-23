import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditorComponent } from './editor/editor.component';


const routes: Routes = [
  {
    path: 'editor',
    component: EditorComponent,
    data: { title: 'Editor' }
  },
  { path: '',  redirectTo: '/editor',  pathMatch: 'full'},

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
