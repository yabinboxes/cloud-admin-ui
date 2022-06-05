import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 /* { path: '', pathMatch: 'full', component: NotFoundComponent },
  { path: 'menu/:id', pathMatch: 'full', component: ShowMenuComponent },
  { path: '**', redirectTo: '' }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
