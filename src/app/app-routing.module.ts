import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HTTP } from '@ionic-native/http/ngx';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    runGuardsAndResolvers: "always"
  },
  
  { path:  'register', loadChildren:  './auth/register/register.module#RegisterPageModule' },
  { path:  'login', loadChildren:  './auth/login/login.module#LoginPageModule' },
  { path: 'classes', loadChildren: './classes/classes.module#ClassesPageModule' },
  { path: 'join', loadChildren: './join/join.module#JoinPageModule' },
  { path: 'messages', loadChildren: './messages/messages.module#MessagesPageModule' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload', preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
