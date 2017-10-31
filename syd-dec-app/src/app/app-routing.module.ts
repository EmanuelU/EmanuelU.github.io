import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { SequencesComponent }   from './sequences.component';
 
const routes: Routes = [
  { path: '', redirectTo: '/sequences', pathMatch: 'full' },
  { path: 'sequences',     component: SequencesComponent },
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}