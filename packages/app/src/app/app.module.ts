import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ApiModule, Configuration, ConfigurationParameters } from '@app-api';

export function apiConfigFactory(): Configuration {
  const params: ConfigurationParameters = {
    basePath: "https://localhost:7296",
    withCredentials: true
  };
  return new Configuration(params);
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
    HttpClientModule,
    ApiModule.forRoot(apiConfigFactory )
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
