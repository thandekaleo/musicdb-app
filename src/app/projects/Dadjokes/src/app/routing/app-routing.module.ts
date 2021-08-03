import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../components/layout/layout.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { RandomJokeComponent } from '../components/random-joke/random-joke.component';
import { SearchJokeComponent } from '../components/search-joke/search-joke.component';
import { paths } from './app-paths';
import { PathResolveService } from './path-resolve.service';

export const routes: Routes = [
  {
    path: paths.home,
    component: LayoutComponent,
    children: [
      {
        path: paths.home,
        component: RandomJokeComponent
      },
      {
        path: paths.randomJoke,
        component: RandomJokeComponent
      },
      {
        path: `${paths.searchJoke}/:query`,
        component: SearchJokeComponent
      },
      {
        path: '**',
        resolve: {
          path: PathResolveService
        },
        component: NotFoundComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
