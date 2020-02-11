import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent }
  ];
// tslint:disable-next-line:typedef-whitespace
export const App : ModuleWithProviders = RouterModule.forRoot(appRoutes); {

}
