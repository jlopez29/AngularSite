import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamesComponent } from '../app/components/games/games.component';
import { GameDetailComponent } from '../app/components/game-detail/game-detail.component';
import { DashboardComponent } from '../app/components/dashboard/dashboard.component';

const routes: Routes = [
    {path: '', redirectTo:'/dashboard', pathMatch:'full'},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'games', component: GamesComponent},
    {path: 'games/detail/:id', component: GameDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
