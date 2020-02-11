import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RootComponent } from './root/root.component';
import { SettingComponent } from './setting/setting.component';



@NgModule({
  declarations: [HomeComponent, RootComponent, SettingComponent],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
