import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Auth } from '../auth.guard';
import { RootComponent } from './root/root.component';
import { HomeComponent } from '../home/home.component';
import { SettingComponent } from './setting/setting.component';


export const routing: ModuleWithProviders = RouterModule.forChild([
  {
      path: 'dashboard',
      component: RootComponent, canActivate: [Auth],

      children: [
       { path: '', component: HomeComponent },
       { path: 'home',  component: HomeComponent },
       { path: 'settings',  component: SettingComponent },
      ]
    }
]);
