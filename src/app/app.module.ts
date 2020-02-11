import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// tslint:disable-next-line:no-trailing-whitespace
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AccountModule } from './account/account.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { App } from './app.routing';
import { HttpModule, XHRBackend } from '@angular/http';
import { ConfigService } from './shared/utils/config.service';
import { AuthenticateXhr } from './authenticate-xhr.backend';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AccountModule,
    DashboardModule,
    BrowserModule,
    HttpModule,
    App
  ],
  providers: [ConfigService, {
    provide: XHRBackend,
    useClass: AuthenticateXhr
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
