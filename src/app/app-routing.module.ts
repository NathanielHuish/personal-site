import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { NationalParksComponent } from './national-parks/national-parks.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { animation: 'fadeInAnimation' } },
  { path: 'resume', component: ResumeComponent, data: { animation: 'fadeInAnimation' } },
  { path: 'national-parks', component: NationalParksComponent, data: { animation: 'fadeInAnimation' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
