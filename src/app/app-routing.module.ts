import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
//import { HomeModule } from './home/home.module';

const routes: Routes = [
  {
    path: '',
    //loadChildren: () => import('./home/home.component').then(m => m.HomeComponent)
    //component: HomeComponent,
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'test',
    component: TestComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
