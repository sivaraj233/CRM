import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './components/category/category.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { ProjectComponent } from './components/project/project.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashbaord', component: DashboardComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'project', component: ProjectComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
