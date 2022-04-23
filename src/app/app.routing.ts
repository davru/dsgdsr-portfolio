import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/homepage/homepage.module').then(m => m.HomepageModule) },
  { path: 'blog', loadChildren: () => import('./pages/blog/blog.module').then(m => m.BlogModule) },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
