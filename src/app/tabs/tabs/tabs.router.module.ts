import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'score',
        children: [
          {
            path: '',
            loadChildren: '../score/score.module#Tab1PageModule'
          }
        ]
      },
      {
        path: 'match',
        children: [
          {
            path: '',
            loadChildren: '../match/match.module#Tab2PageModule'
          }
        ]
      },
      {
        path: 'leaderboard',
        children: [
          {
            path: '',
            loadChildren: '../leaderboard/leaderboard.module#Tab3PageModule'
          }
        ]
      },
      {
        path: 'team',
        children: [
          {
            path: '',
            loadChildren: '../team/team.module#Tab4PageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/score',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
