import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhonesComponent } from './phones/phones.component';
import { PhoneComponent } from './phone/phone.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/phones'},
  {path: 'phones', component: PhonesComponent},
  {path: 'phones/:id', component: PhoneComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
