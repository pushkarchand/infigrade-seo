import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './components/aboutus/aboutus.component';

const routes: Routes = [
  {
        path:'',
        component:AboutUsComponent
  },
  {
    path:'aboutus',
    component:AboutUsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
